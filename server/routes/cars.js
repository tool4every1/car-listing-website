import express from 'express';
const router = express.Router();

// Get cars with filters
router.get('/', async (req, res) => {
  const { minPrice, maxPrice, fuelType } = req.query;
  
  try {
    const cars = await Car.findAll({
      where: {
        price: { [Op.between]: [minPrice || 0, maxPrice || 10000000] },
        ...(fuelType && { fuel_type: fuelType })
      },
      limit: 50
    });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add new car listing
router.post('/', authMiddleware, async (req, res) => {
  if (req.user.user_type !== 'dealer') {
    return res.status(403).json({ error: 'Only dealers can list cars' });
  }
  
  const newCar = await Car.create({
    ...req.body,
    dealer_id: req.user.id
  });
  
  res.status(201).json(newCar);
});

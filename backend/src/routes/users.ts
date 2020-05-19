import { Request, Response, NextFunction, Router } from 'express';

import User from '../models/User';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();

    res.status(200).json({ data: users });
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.params.id);

    res.status(200).json({ data: user });
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.create(req.body);

    res.status(200).json({ data: user });
});

export default router;

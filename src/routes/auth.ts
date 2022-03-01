import { Router } from 'express';
const router: Router = Router();

router.get('/', (req, res) => {
    console.log('hello world');
    res.send('Hello World');
})

export default router;
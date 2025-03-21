import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

// Enable CORS so frontend can fetch data from backend
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Welcone to the HomePage!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

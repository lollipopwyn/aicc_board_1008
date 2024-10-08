const express = require('express');
const cors = require('cors');
const PORT = '8080';
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(require('./routes/postRoutes'));
app.use(require('./routes/getRoutes'));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); //서버를 정상 실행할 시 메시지 출력

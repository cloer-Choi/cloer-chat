import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
const FileStore = sessionFileStore(session);
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import passport from './src/config/passport/index.js';
import webSocketInit from './src/sockets/index.js';
import cors from 'cors'; // FIXME:

// import Routers
import APIrouters from './src/routers/index.js';

// app set
const app = express();
app.set('port', process.env.PORT || 3001);

// middlewares
if (process.env.NODE_ENV !== 'production') app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); // FIXME:
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    store: new FileStore({ logFn: () => {} }),
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routers
app.use('/api', APIrouters);

// Error exeption
import { baseMessage, errorMessage } from './src/lib/responseMessage.js';
app.use((req, res, next) => res.json(errorMessage(baseMessage.WRONG_PATH)));
app.use((err, req, res, next) => {
  console.error(err);
  return res.json(errorMessage(baseMessage.SERVER_ERROR));
});

const expressServer = app.listen(app.get('port'), () => console.log(`cloer chat server is running on port ${app.get('port')}`));
webSocketInit(expressServer, app);

'use strict';
module.exports = {
  TKM_KEY: process.env.TKM_KEY || 'wCHbhAq3GitRal013GIynrAfLxPqmQqB',
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  DATABASE_URL:
        process.env.DATABASE_URL || 'mongodb://localhost/concerts-backend',
  TEST_DATABASE_URL:
        process.env.TEST_DATABASE_URL ||
        'mongodb://localhost/concerts-backend-test'
};

//manually put in TKM_KEY in this file
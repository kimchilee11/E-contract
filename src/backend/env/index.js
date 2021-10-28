require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 8000,
    CORS_ALLOW: process.env.CORS_ALLOW || 8082,
    SESSION_SECRET: process.env.SESSION_SECRET,
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10,
    CLIENT_ID: process.env.CLIENT_ID,
    JWT_SECRET: process.env.JWT_SECRET || 'hehe',
    EXPIRE_DAYS: process.env.EXPIRE_DAYS || '1d',
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || 'dz6cxtulr',
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || '624673635566928',
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || 'cpu6qYyC9cEd4a55txgPzZhdibI'
};

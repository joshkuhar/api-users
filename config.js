exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://localhost/users-production' :
                            'mongodb://localhost/users');
exports.PORT = process.env.PORT || 8080;
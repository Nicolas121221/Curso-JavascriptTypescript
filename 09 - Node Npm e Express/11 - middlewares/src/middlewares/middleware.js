exports.middlewareGlobal = (req, res, next) => {
    if (req.body) {
        console.log(req.body)
    };
    next();
};
exports.outroMiddleware= (req,res,next)=>{
    console.log('outro Middleware');
    next();
};
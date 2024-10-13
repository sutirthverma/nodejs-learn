function paginatedResult(model) {
    return (req, res, next) => {

        try {

            const page = req.query.page || 1;
            const limit = req.query.limit || 10;

            const startIndex = (page - 1) * limit;
            const endIndex = (page * limit);
            const result = model.slice(startIndex, endIndex);

            res.paginatedResult = result;
            next();
        } catch (err) {
            return res.json({error: err.message});
        }
    }
}

module.exports = {
    paginatedResult
}
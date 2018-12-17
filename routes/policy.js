import policies from '../db/policy';

module.exports =  {
    policy: (req, res) => {
        res.status(200).send(
            policies
        )
    }
};
import axios from 'axios';

export default axios.create({
    baseURL: 'http://questdex-env.eba-7xcqqbdr.us-east-2.elasticbeanstalk.com',
});

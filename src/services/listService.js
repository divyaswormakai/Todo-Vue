import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/lists';

export const getLists = async () => {
  try {
    let lists = await axios.get('/');
    return lists.data;
  } catch (err) {
    return { err: 'Something wrong, I can feel it' + err.message };
  }
};

export const updateList = async body => {
  try {
    let newList = await axios.put(`/${body.id}`, body);
    return newList;
  } catch (err) {
    return { err: 'Something wrong, I can feel it' + err.message };
  }
};

export const addtoList = async body => {
  try {
    console.log(body);
    let savedList = await axios.post('/', body);
    return savedList;
  } catch (err) {
    return { err: 'Something wrong, I can feel it' + err.message };
  }
};

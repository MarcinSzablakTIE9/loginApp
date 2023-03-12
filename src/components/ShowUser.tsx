import { useEffect, useCallback, useState } from 'react';
import classes from './ShowUser.module.css' ;

const ShowUser = () => {
  const [loadedData, setLoadedData] = useState([]);

  const getData = useCallback(async () => {
    const res = await fetch('https://loginreactapp2-default-rtdb.firebaseio.com/dane.json');
    const data = await res.json();

    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        name: data[key].name,
        email: data[key].email,
        age: data[key].age,
      });
    }

    return loadedData;
  }, []);

  useEffect(() => {
    getData().then((data) => {
      setLoadedData(data);
    });
  }, [getData]);

  useEffect(() => {
    console.log(loadedData);
  }, [loadedData]);

  return(
    <div className={classes.dumy}>
      {loadedData.map((item) => (
        <div className={classes.main} key={item.email}>
          <p>Nazwa: {item.name}</p>
          <p>Email: {item.email}</p>
          <p>Wiek: {item.age}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowUser;
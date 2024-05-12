import React from 'react';

function Task1(){

  let inputString = "10/null/IVANOVA/OLGA/MRS|8/2005-09-30/IVANOV/ALEXEY/MR|7/2008-12-15/IVANOVA/ALESYA/MRS|";

  let tourists = inputString.split('|');

  return (
      <div>
        {tourists.map((touristInfo, index)=> {
          let touristData = touristInfo.split('/');
          let touristType;

          if (touristData[0] === '10') {
            touristType = 'ADT';
          } else if (touristData[0] === '8') {
            touristType = 'CHD';
          } else {
            touristType = 'INF';
          }

          return (
              <tourist key={index} type={touristType} birthDate={touristType !== 'ADT' ? touristData[1] : null}>
                <prefix>{touristData[4]}</prefix>
                <name>{touristData[3]}</name>
                <surname>{touristData[2]}</surname>
              </tourist>
          );
        })}
      </div>
  );
}

export default Task1;

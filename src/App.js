import React from "react";

const user = {
  name: 'Obama, blueface, DaBaby',
  imageURL: 'https://i.imgur.com/BBwaSV1.jpeg',
  imageSize: 360,
  info: "Первый афроамериканец, выдвинутый на пост президента США от одной из двух крупнейших партий[9], и первый в национальной истории глав государства темнокожий президент, а также президент с фамилией африканского и средним именем арабского этимологического происхождения. Обама — мулат, но, в отличие от большинства чёрных американцев, не потомок рабов, а сын студента из Кении и белой американки (Стэнли Энн Данхэм). Плюс этот братик подержал реперов, конечно не джус врлд,но и так сойдёт"
}

export default function Profile() {
  return (
      <>
        <h1>{user.name}</h1>
        <h2>{user.info}</h2>
        <img className="avatar" src={user.imageURL} alt={"photo of" + user.name} style={{width: user.imageSize, height: user.imageSize}}
        />
      </>
  )
}


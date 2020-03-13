
import React from 'react'
import {observer} from "mobx-react";
export default observer(({ adminStore }) => {return (
    <div>
    <table>
        <th><td>name</td><td>email</td></th>
        <tbody>
      {adminStore.adminList.map(admin => (
       <tr><td>{admin.name}</td><td>{admin.email}</td></tr>
      ))}
      </tbody>
    </table>
  
  </div>
    )});


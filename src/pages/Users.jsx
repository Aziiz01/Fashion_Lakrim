import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../pages/Style.css"

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:8000/users');
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);

  const handleDelete = async (id)=>{
    try {
        await axios.delete("http://localhost:8000/users/"+id);
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
  }
  
  return (
    <div>
  <h1 className="title">Liste des Utilisateurs</h1>
  <div className="table-container">

  <table className="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Email</th>
        <th>Mot de passe</th>
        <th>Numéro de téléphone</th>
        <th>Date de naissance</th>
        <th>Modification</th>
        <th>suppression</th>

      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user.id} className="user">
          <td>{user.nom}</td>
          <td>{user.prenom}</td>
          <td>{user.email}</td>
          <td>{user.pwd}</td>
          <td>{user.num_tel}</td>
          <td>{user.date_naissance}</td>
        <td><button className='delete' onClick={()=>handleDelete(user.id)}>Supprimer</button></td>
        <td>
  <button className='update'>
    <Link to={`/update/${user.id}`}>Modifier</Link>
  </button>
</td>
        </tr>
      ))}
    </tbody>
  </table>
  <button className='add'>
    <Link to = "/add">Ajouter un utilisateur</Link>
    </button>
</div>
</div>
  )
}

export default Users;

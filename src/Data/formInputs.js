export const userInputs = [
    {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "username",
    },
    {
      id: "displayName",
      label: "Name and surname",
      type: "text",
      placeholder: "Nom et prénom",
    },
    {
      id: "email",
      label: "Email",
      type: "mail",
      placeholder: "exemple@gmail.com",
    },
    {
      id: "phone",
      label: "Phone",
      type: "text",
      placeholder: "+216",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
    },
    {
      id: "address",
      label: "Address",
      type: "text",
      placeholder: "adresse",
    },
    
  ];
  export const productInputs = [
    {
      id: "nom",
      label: "Nom",
      type: "text",
      placeholder: "nom",
    },
    {
      id: "description",
      label: "Description",
      type: "text",
      placeholder: "Description",
    },
    {
      id: "marque",
      label: "Marque",
      type: "text",
      placeholder: "marque",
    },
    {
      id: "prix",
      label: "Prix",
      type: "number",
      placeholder: "prix",
    },
    {
      id: "quantite",
      label: "Quatite",
      type: "number",
      placeholder: "quantite",
    },
    {
      id: "rating",
      label: "Rating",
      type: "number",
      placeholder: "rating",
    },
    {
      id: "categorie",
      label: "Categorie",
      type: "text",
      placeholder: "categorie",

    },
     
  
  ];
  export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
  
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 160,
      
    },
  ];
  export const orderColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "client",
      headerName: "Client",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.nom} {params.row.prenom} {params.row.societe}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
  
    {
      field: "adresse",
      headerName: "Adresse",
      width: 150,
    },
    {
      field: "code_postal",
      headerName: "Code postal",
      width: 100,
    },
    {
      field: "ville",
      headerName: "Ville",
      width: 80,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 160,
    },
    {
      field: "produits",
      headerName: "Produits",
      width: 80,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
  ];
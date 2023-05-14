import { categories, sous_categories, sous_sous_categories } from "./Categories";
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
     
    {
      id: "sous_categorie",
      label: "Sous Categorie",
      type: "text",
      placeholder: "sous categorie",
    },
    {
      id: "sous_sous_categorie",
      label: "Sous Sous Categorie",
      type: "text",
      placeholder: "sous sous categorie",
    },
    
  ];
  export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
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
      width: 230,
    },
  
    {
      field: "address",
      headerName: "Address",
      width: 100,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 160,
      
    },
  ];
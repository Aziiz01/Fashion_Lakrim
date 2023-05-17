function Sidebar() {
  const user = JSON.parse(localStorage.getItem('user')); 
  const email = user ? user.email : '';

  return (
    <div className="sb-nav-fixed">
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <a className="nav-link" href="/">
                  <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                  Hayfa Dashboard
                </a>
                <div className="sb-sidenav-menu-heading">Interface</div>
                <a className="nav-link" href="/users">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Users
                </a>
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Produits
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="/Products">Voir Produits</a>
                    <a className="nav-link" href="/add_p">Ajouter Produit</a>
                  </nav>
                </div>
                <a className="nav-link" href="/reviews">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Reviews
                </a>
                <a className="nav-link" href="/orders">
                  <div className="sb-nav-link-icon"><i className="fas fa-shopping-cart"></i></div>
                  Orders
                </a>
                <div className="sb-sidenav-menu-heading">Fonctionalités spéciales</div>
                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                  Charts
                </a>
                <a className="nav-link" href="tables.html">
                  <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                  Tables
                </a>
              </div>
            </div>
            {user && (
              <div className="sb-sidenav-footer">
                <div className="small">Logged in as: {email}</div>
              </div>
            )}
          </nav>
        </div>
        <div id="layoutSidenav_content"></div>
      </div>
    </div>
  );
}

export default Sidebar;

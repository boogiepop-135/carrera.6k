import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
			<div className="container">
				<Link to="/" className="navbar-brand d-flex align-items-center">
					<i className="fas fa-leaf text-success me-2 fs-4"></i>
					<span className="brand-name fw-bold">San Cosme Orgánico</span>
				</Link>
				<button 
					className="navbar-toggler" 
					type="button" 
					data-bs-toggle="collapse" 
					data-bs-target="#navbarNav"
					aria-controls="navbarNav" 
					aria-expanded="false" 
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto align-items-center">
						<li className="nav-item">
							<Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#menu">Menú</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#nosotros">Nosotros</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contacto">Contacto</a>
						</li>
						<li className="nav-item ms-3">
							<a 
								href="tel:+524429035940" 
								className="btn btn-success rounded-pill px-4"
							>
								<i className="fas fa-phone me-2"></i>
								Reservar
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
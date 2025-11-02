export const Footer = () => (
	<footer className="footer bg-dark text-white py-5 mt-5">
		<div className="container">
			<div className="row g-4">
				<div className="col-md-4">
					<h5 className="fw-bold mb-3">
						<i className="fas fa-leaf text-success me-2"></i>
						San Cosme Orgánico
					</h5>
					<p className="text-muted">
						Sabores naturales que nutren tu cuerpo y tu alma. 
						Descubre la magia de la comida orgánica en el corazón de Querétaro.
					</p>
					<div className="d-flex gap-3">
						<a 
							href="https://www.facebook.com/sancosme.mx" 
							target="_blank" 
							rel="noopener noreferrer"
							className="text-white text-decoration-none"
						>
							<i className="fab fa-facebook-f fa-lg"></i>
						</a>
						<a 
							href="https://www.instagram.com/sancosme.mx" 
							target="_blank" 
							rel="noopener noreferrer"
							className="text-white text-decoration-none"
						>
							<i className="fab fa-instagram fa-lg"></i>
						</a>
					</div>
				</div>
				<div className="col-md-4">
					<h5 className="fw-bold mb-3">Información</h5>
					<ul className="list-unstyled">
						<li className="mb-2">
							<i className="fas fa-map-marker-alt text-success me-2"></i>
							<small className="text-muted">
								Av. Paseo de La Reforma #145 Int. 1<br />
								Santiago de Querétaro, Qro. 76146
							</small>
						</li>
						<li className="mb-2">
							<i className="fas fa-phone text-success me-2"></i>
							<a href="tel:+524429035940" className="text-muted text-decoration-none">
								<small>442 903 5940</small>
							</a>
						</li>
						<li className="mb-2">
							<i className="fas fa-envelope text-success me-2"></i>
							<a href="mailto:sancosme.mx@gmail.com" className="text-muted text-decoration-none">
								<small>sancosme.mx@gmail.com</small>
							</a>
						</li>
					</ul>
				</div>
				<div className="col-md-4">
					<h5 className="fw-bold mb-3">Horario</h5>
					<ul className="list-unstyled text-muted">
						<li className="mb-2">
							<small>
								<strong>Lunes - Sábado:</strong><br />
								8:00 AM - 10:00 PM
							</small>
						</li>
						<li className="mb-2">
							<small>
								<strong>Domingo:</strong><br />
								8:00 AM - 3:45 PM
							</small>
						</li>
					</ul>
				</div>
			</div>
			<hr className="my-4 bg-light opacity-25" />
			<div className="row">
				<div className="col-12 text-center">
					<p className="text-muted mb-0">
						&copy; {new Date().getFullYear()} San Cosme Orgánico. Todos los derechos reservados.
					</p>
					<p className="text-muted mt-2">
						Hecho con <i className="fas fa-heart text-danger"></i> para Querétaro
					</p>
				</div>
			</div>
		</div>
	</footer>
);

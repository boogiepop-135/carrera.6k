import React from "react"

export const Home = () => {

	return (
		<>
			{/* Hero Section */}
			<section className="hero-section position-relative overflow-hidden">
				<div className="hero-overlay"></div>
				<div className="container position-relative" style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}>
					<div className="row w-100">
						<div className="col-lg-7 mx-auto text-center text-white">
							<h1 className="display-2 fw-bold mb-4 hero-title">
								<i className="fas fa-leaf text-success me-3"></i>
								San Cosme Orgánico
							</h1>
							<p className="lead fs-3 mb-4 hero-subtitle">
								Sabores naturales que nutren tu cuerpo y tu alma
							</p>
							<p className="fs-5 mb-5">
								Descubre la magia de la comida orgánica en el corazón de Querétaro. 
								Cada bocado es una experiencia de frescura y sabor auténtico.
							</p>
							<div className="d-flex gap-3 justify-content-center flex-wrap">
								<a href="#menu" className="btn btn-success btn-lg rounded-pill px-5 py-3 shadow-lg">
									<i className="fas fa-utensils me-2"></i>
									Ver Menú
								</a>
								<a href="tel:+524429035940" className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 shadow-lg">
									<i className="fas fa-phone me-2"></i>
									Reservar Mesa
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-5 bg-light">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-4 text-center">
							<div className="feature-card p-4 h-100 bg-white rounded-4 shadow-sm">
								<div className="feature-icon mb-3">
									<i className="fas fa-seedling fa-3x text-success"></i>
								</div>
								<h4 className="fw-bold mb-3">100% Orgánico</h4>
								<p className="text-muted">
									Ingredientes frescos y orgánicos, cultivados con amor y respeto por la naturaleza.
								</p>
							</div>
						</div>
						<div className="col-md-4 text-center">
							<div className="feature-card p-4 h-100 bg-white rounded-4 shadow-sm">
								<div className="feature-icon mb-3">
									<i className="fas fa-heart fa-3x text-danger"></i>
								</div>
								<h4 className="fw-bold mb-3">Saludable y Delicioso</h4>
								<p className="text-muted">
									Cada platillo está diseñado para nutrir tu cuerpo sin sacrificar el sabor excepcional.
								</p>
							</div>
						</div>
						<div className="col-md-4 text-center">
							<div className="feature-card p-4 h-100 bg-white rounded-4 shadow-sm">
								<div className="feature-icon mb-3">
									<i className="fas fa-recycle fa-3x text-info"></i>
								</div>
								<h4 className="fw-bold mb-3">Sostenible</h4>
								<p className="text-muted">
									Comprometidos con el medio ambiente y prácticas sostenibles en cada aspecto.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Menu Section */}
			<section id="menu" className="py-5">
				<div className="container">
					<div className="text-center mb-5">
						<h2 className="display-4 fw-bold mb-3">
							<i className="fas fa-utensils text-success me-3"></i>
							Nuestro Menú
						</h2>
						<p className="lead text-muted">Delicias orgánicas para todos los gustos</p>
					</div>
					<div className="row g-4">
						<div className="col-md-6 col-lg-4">
							<div className="menu-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
								<div className="menu-image position-relative" style={{ height: "200px", background: "linear-gradient(135deg, #84d160 0%, #28a745 100%)" }}>
									<div className="position-absolute top-50 start-50 translate-middle">
										<i className="fas fa-glass-water fa-5x text-white opacity-75"></i>
									</div>
								</div>
								<div className="card-body p-4">
									<h5 className="card-title fw-bold">Smoothies & Jugos Cold Press</h5>
									<p className="card-text text-muted">
										Bebidas refrescantes con superfoods, frutas orgánicas y nutrientes naturales.
									</p>
									<span className="badge bg-success">Refrescante</span>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="menu-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
								<div className="menu-image position-relative" style={{ height: "200px", background: "linear-gradient(135deg, #ffa726 0%, #fb8c00 100%)" }}>
									<div className="position-absolute top-50 start-50 translate-middle">
										<i className="fas fa-bowl-food fa-5x text-white opacity-75"></i>
									</div>
								</div>
								<div className="card-body p-4">
									<h5 className="card-title fw-bold">Bowls Nutritivos</h5>
									<p className="card-text text-muted">
										Combinaciones perfectas de granos, vegetales y proteínas orgánicas.
									</p>
									<span className="badge bg-warning text-dark">Nutritivo</span>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="menu-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
								<div className="menu-image position-relative" style={{ height: "200px", background: "linear-gradient(135deg, #66bb6a 0%, #43a047 100%)" }}>
									<div className="position-absolute top-50 start-50 translate-middle">
										<i className="fas fa-burger fa-5x text-white opacity-75"></i>
									</div>
								</div>
								<div className="card-body p-4">
									<h5 className="card-title fw-bold">Sándwiches Orgánicos</h5>
									<p className="card-text text-muted">
										Pan artesanal con ingredientes frescos y opciones veganas disponibles.
									</p>
									<span className="badge bg-success">Vegano</span>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="menu-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
								<div className="menu-image position-relative" style={{ height: "200px", background: "linear-gradient(135deg, #81c784 0%, #66bb6a 100%)" }}>
									<div className="position-absolute top-50 start-50 translate-middle">
										<i className="fas fa-leaf fa-5x text-white opacity-75"></i>
									</div>
								</div>
								<div className="card-body p-4">
									<h5 className="card-title fw-bold">Ensaladas Frescas</h5>
									<p className="card-text text-muted">
										Ensaladas crujientes con verduras de temporada y aderezos caseros.
									</p>
									<span className="badge bg-success">Fresco</span>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="menu-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
								<div className="menu-image position-relative" style={{ height: "200px", background: "linear-gradient(135deg, #ffb74d 0%, #ffa726 100%)" }}>
									<div className="position-absolute top-50 start-50 translate-middle">
										<i className="fas fa-waffle fa-5x text-white opacity-75"></i>
									</div>
								</div>
								<div className="card-body p-4">
									<h5 className="card-title fw-bold">Waffles Deliciosos</h5>
									<p className="card-text text-muted">
										Waffles caseros con ingredientes orgánicos y toppings saludables.
									</p>
									<span className="badge bg-warning text-dark">Dulce</span>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="menu-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
								<div className="menu-image position-relative" style={{ height: "200px", background: "linear-gradient(135deg, #4caf50 0%, #388e3c 100%)" }}>
									<div className="position-absolute top-50 start-50 translate-middle">
										<i className="fas fa-shopping-bag fa-5x text-white opacity-75"></i>
									</div>
								</div>
								<div className="card-body p-4">
									<h5 className="card-title fw-bold">Tienda Ecológica</h5>
									<p className="card-text text-muted">
										Productos orgánicos y eco-friendly para llevar a casa.
									</p>
									<span className="badge bg-info">Ecológico</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="nosotros" className="py-5 bg-light">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 mb-4 mb-lg-0">
							<div className="about-image p-5 text-center" style={{ background: "linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)", borderRadius: "20px" }}>
								<i className="fas fa-store fa-10x text-success opacity-25"></i>
							</div>
						</div>
						<div className="col-lg-6">
							<h2 className="display-5 fw-bold mb-4">
								<i className="fas fa-heart text-danger me-3"></i>
								Nuestra Historia
							</h2>
							<p className="lead mb-4">
								En San Cosme Orgánico, creemos que la alimentación debe ser una experiencia 
								que nutra tanto el cuerpo como el alma.
							</p>
							<p className="mb-4">
								Nuestro compromiso es ofrecerte los mejores ingredientes orgánicos, cultivados 
								con métodos sostenibles y respetuosos con el medio ambiente. Cada platillo 
								está preparado con amor y dedicación, pensando en tu bienestar.
							</p>
							<p className="mb-4">
								Ubicados en el corazón de Querétaro, somos más que un restaurante: somos 
								una comunidad comprometida con la salud, la sostenibilidad y el sabor auténtico.
							</p>
							<div className="d-flex gap-3 flex-wrap">
								<span className="badge bg-success p-3 fs-6">
									<i className="fas fa-leaf me-2"></i>
									Ingredientes Orgánicos
								</span>
								<span className="badge bg-info p-3 fs-6">
									<i className="fas fa-users me-2"></i>
									Comunidad Local
								</span>
								<span className="badge bg-warning p-3 fs-6 text-dark">
									<i className="fas fa-award me-2"></i>
									Calidad Premium
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-5">
				<div className="container">
					<div className="text-center mb-5">
						<h2 className="display-5 fw-bold mb-3">
							<i className="fas fa-star text-warning me-3"></i>
							Lo Que Dicen Nuestros Clientes
						</h2>
						<p className="lead text-muted">La opinión de nuestra comunidad es lo más importante</p>
					</div>
					<div className="row g-4">
						<div className="col-md-4">
							<div className="testimonial-card card h-100 border-0 shadow-sm rounded-4 p-4">
								<div className="mb-3">
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
								</div>
								<p className="card-text mb-3">
									"La mejor experiencia gastronómica orgánica en Querétaro. Cada visita 
									es un deleite para los sentidos."
								</p>
								<div className="d-flex align-items-center">
									<div className="avatar-circle bg-success rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px" }}>
										<span className="text-white fw-bold">MC</span>
									</div>
									<div>
										<h6 className="mb-0 fw-bold">María C.</h6>
										<small className="text-muted">Cliente frecuente</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="testimonial-card card h-100 border-0 shadow-sm rounded-4 p-4">
								<div className="mb-3">
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
								</div>
								<p className="card-text mb-3">
									"Los bowls nutritivos son mi favorito. Ingredientes frescos y sabores 
									increíbles. ¡Altamente recomendado!"
								</p>
								<div className="d-flex align-items-center">
									<div className="avatar-circle bg-info rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px" }}>
										<span className="text-white fw-bold">JL</span>
									</div>
									<div>
										<h6 className="mb-0 fw-bold">Juan L.</h6>
										<small className="text-muted">Amante de la comida saludable</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="testimonial-card card h-100 border-0 shadow-sm rounded-4 p-4">
								<div className="mb-3">
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
								</div>
								<p className="card-text mb-3">
									"Como vegano, encontrar opciones deliciosas y nutritivas es difícil. 
									Aquí encontré mi lugar favorito."
								</p>
								<div className="d-flex align-items-center">
									<div className="avatar-circle bg-warning rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px" }}>
										<span className="text-dark fw-bold">AC</span>
									</div>
									<div>
										<h6 className="mb-0 fw-bold">Ana C.</h6>
										<small className="text-muted">Cliente vegano</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contacto" className="py-5 bg-light">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mx-auto text-center">
							<h2 className="display-5 fw-bold mb-4">
								<i className="fas fa-map-marker-alt text-success me-3"></i>
								Visítanos
							</h2>
							<div className="row g-4 mt-4">
								<div className="col-md-4">
									<div className="contact-card p-4 bg-white rounded-4 shadow-sm h-100">
										<i className="fas fa-map-marker-alt fa-3x text-success mb-3"></i>
										<h5 className="fw-bold mb-3">Ubicación</h5>
										<p className="text-muted mb-0">
											Av. Paseo de La Reforma #145 Int. 1<br />
											Santiago de Querétaro, Qro. 76146
										</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="contact-card p-4 bg-white rounded-4 shadow-sm h-100">
										<i className="fas fa-clock fa-3x text-info mb-3"></i>
										<h5 className="fw-bold mb-3">Horario</h5>
										<p className="text-muted mb-0">
											Lun - Sáb: 8:00 AM - 10:00 PM<br />
											Domingo: 8:00 AM - 3:45 PM
										</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="contact-card p-4 bg-white rounded-4 shadow-sm h-100">
										<i className="fas fa-phone fa-3x text-success mb-3"></i>
										<h5 className="fw-bold mb-3">Contacto</h5>
										<p className="text-muted mb-2">
											<a href="tel:+524429035940" className="text-decoration-none text-dark">
												442 903 5940
											</a>
										</p>
										<p className="text-muted mb-0">
											<a href="tel:+524421430748" className="text-decoration-none text-dark">
												442 143 0748
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className="mt-5">
								<h4 className="fw-bold mb-4">Síguenos en Redes Sociales</h4>
								<div className="d-flex justify-content-center gap-4">
									<a 
										href="https://www.facebook.com/sancosme.mx" 
										target="_blank" 
										rel="noopener noreferrer"
										className="social-icon btn btn-outline-primary rounded-circle p-3"
										style={{ width: "60px", height: "60px" }}
									>
										<i className="fab fa-facebook-f fa-lg"></i>
									</a>
									<a 
										href="https://www.instagram.com/sancosme.mx" 
										target="_blank" 
										rel="noopener noreferrer"
										className="social-icon btn btn-outline-danger rounded-circle p-3"
										style={{ width: "60px", height: "60px" }}
									>
										<i className="fab fa-instagram fa-lg"></i>
									</a>
								</div>
							</div>
						</div>
			</div>
		</div>
			</section>
		</>
	);
}; 
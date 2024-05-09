import React, { useState } from "react";

function Profile() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.net",
    phone: "083xxxxxxxxx",
    // Ensure these state values are initialized to avoid undefined errors
    birthday: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <section className="section">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4"> {/* Added margin-bottom here */}
            <div className="card-body">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="avatar avatar-xl">
                  <img
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "5px",
                    }}
                    src="assets/static/images/faces/2.jpg"
                    alt="Avatar"
                  />
                </div>
                <h3 className="mt-3">John Doe</h3>
                <p className="text-small">Junior Software Engineer</p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nom & Prénom
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Num Tél
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="birthday" className="form-label">
                    Date de naissance
                    </label>
                    <input
                      type="date"
                      name="birthday"
                      id="birthday"
                      className="form-control"
                      placeholder="Your Birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                    Sauvegarder
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="new-price">Change Password</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group my-2">
                  <label htmlFor="current_password" className="form-label">
                  Mot de passe actuel
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    id="current_password"
                    className="form-control"
                    placeholder="Enter your current password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="newPassword" className="form-label">
                  Nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    className="form-control"
                    placeholder="Enter new password"
                    value={formData.newPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="confirmPassword" className="form-label">
                  Confirmez le mot de passe
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Enter confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group my-2 d-flex justify-content-start">
                  <button type="submit" className="btn btn-primary">
                  Sauvegarder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

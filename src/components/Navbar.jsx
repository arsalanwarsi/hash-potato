import React from "react";

export default function Navbar() {
  return (
    <>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="/">
              <div className="logo">
                {/* <img src="img/logo.png" alt=""> */}
              </div>
            </a>
            <button
              className="navbar-toggler toggle-btn"
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
              <div className="main-nav">
                <div className="navbar nav-menu">
                  <ul className="nav-list">
                    <li>
                      <a href="index.php" className="nav-link">
                        <i className="bx bx-home"></i>
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="profile.php" className="nav-link scrollto">
                        <i className="bx bx-id-card"></i>
                        <span>About</span>
                      </a>
                    </li>
                    <li>
                      <a href="courses.php" className="nav-link scrollto">
                        <i className="bx bx-book-content"></i>
                        <span>Courses</span>
                      </a>
                    </li>
                    <li>
                      <a href="announcement.php" className="nav-link scrollto">
                        <i className="bx bxs-bell-ring"></i>
                        <span>Announcement</span>
                      </a>
                    </li>
                    <li>
                      <a href="notice.php" className="nav-link scrollto">
                        <i className="bx bx-notification"></i>
                        <span>Notification</span>
                      </a>
                    </li>
                    <li>
                      <a href="password.php" className="nav-link scrollto">
                        <i className="bx bx-user"></i>
                        <span>Password</span>
                      </a>
                    </li>
                    <li>
                      <a href="logout.php" className="nav-link scrollto">
                        <i className="bx bx-log-out"></i>
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

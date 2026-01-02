<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Itierio Lutheran Youth Department</title>

  <style>
    body {
      margin: 0;
      font-family: "Segoe UI", Arial, sans-serif;
      background: linear-gradient(rgba(80,0,120,0.6), rgba(0,0,0,0.6)),
        url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac");
      background-size: cover;
      background-position: center;
      color: #ffffff;
    }

    header {
      padding: 20px;
      text-align: center;
      background: rgba(0, 0, 0, 0.7);
    }

    header h1 {
      margin: 0;
      font-size: 2.5rem;
    }

    header p {
      margin-top: 5px;
      color: #c8e6c9;
    }

    nav {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      background: rgba(20, 20, 20, 0.9);
      padding: 10px;
    }

    .dropdown {
      position: relative;
      margin: 8px;
    }

    .dropdown button {
      background: #2e7d32;
      color: #fff;
      border: none;
      padding: 12px 18px;
      border-radius: 25px;
      cursor: pointer;
      font-size: 0.95rem;
    }

    .dropdown button::after {
      content: " ▼";
      font-size: 0.7rem;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background: #ffffff;
      min-width: 220px;
      border-radius: 8px;
      overflow: hidden;
      z-index: 10;
    }

    .dropdown-content a {
      color: #000;
      padding: 10px 14px;
      text-decoration: none;
      display: block;
      font-size: 0.9rem;
    }

    .dropdown-content a:hover {
      background: #e0e0e0;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    section {
      padding: 40px 20px;
      max-width: 1100px;
      margin: 30px auto;
      background: rgba(0, 0, 0, 0.65);
      border-radius: 16px;
    }

    section h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #a5d6a7;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }

    .card {
      background: rgba(255, 255, 255, 0.1);
      padding: 20px;
      border-radius: 14px;
      text-align: center;
      font-size: 0.95rem;
    }

    iframe {
      width: 100%;
      height: 300px;
      border: 0;
      border-radius: 12px;
    }

    footer {
      text-align: center;
      padding: 20px;
      background: rgba(0, 0, 0, 0.8);
      margin-top: 40px;
      font-size: 0.85rem;
      color: #c8e6c9;
    }

    a {
      color: #a5d6a7;
      text-decoration: none;
      font-weight: bold;
    }
  </style>
</head>

<body>

<header>
  <h1>Itierio Lutheran Youth Department</h1>
  <p>Empowering Youth in Faith, Service & Leadership</p>
</header>

<nav>
  <div class="dropdown">
    <button>Departments</button>
    <div class="dropdown-content">
      <a>Ushering Team</a>
      <a>Media & Branding Team</a>
      <a>Praise & Worship Team</a>
      <a>Hospitality Team</a>
      <a>Executive Team</a>
      <a>Sunday School Team</a>
      <a>Education Team</a>
      <a>Talent Team</a>
      <a>Zion Youth Group</a>
    </div>
  </div>

  <div class="dropdown">
    <button>Plans & Reports</button>
    <div class="dropdown-content">
      <a>Strategic Plan</a>
      <a>2026 Work Plan</a>
      <a>Financial Reports</a>
      <a>Next Gen CBO Partnership</a>
    </div>
  </div>

  <div class="dropdown">
    <button>Programs</button>
    <div class="dropdown-content">
      <a>Environmental Conservation Program</a>
      <a>Charity Activities</a>
      <a>Youth Seminars</a>
      <a>Youth Project</a>
      <a>Bible Expo Program</a>
      <a>Prayer Programs</a>
      <a>Zion Choir</a>
    </div>
  </div>

  <div class="dropdown">
    <button>Downloads</button>
    <div class="dropdown-content">
      <a>2025/2026 Calendar</a>
      <a>Bible</a>
      <a>Catechism</a>
      <a>Youth Business Plan</a>
      <a href="#mwimbieni">Mwimbieni Bwana – Ksh 20</a>
      <a>Youth Constitution</a>
      <a>ELCK Constitution</a>
      <a>Concordia</a>
    </div>
  </div>

  <div class="dropdown">
    <button>More</button>
    <div class="dropdown-content">
      <a>Gallery</a>
      <a href="#youth-database">Youth Database</a>
      <a>Paybill Information</a>
      <a>Contact</a>
    </div>
  </div>
</nav>

<section>
  <h2>Live Youth News Feed</h2>
  <div class="grid">
    <div class="card">📰 Sunday Youth Fellowship resumes this Sunday at 2:00 PM.</div>
    <div class="card">📢 Registration ongoing for new Lutheran youth members.</div>
    <div class="card">🎶 Zion Choir rehearsals every Saturday at 2:00 PM.</div>
  </div>
</section>

<section id="youth-database">
  <h2>Youth Database (Restricted Access)</h2>
  <div class="grid">
    <div class="card">
      <strong>Official Lutheran Youth Database</strong><br><br>
      This document contains official youth records used strictly for
      ministry planning, coordination, and communication.
    </div>

    <div class="card">
      <strong>Permission Required</strong><br><br>
      Access is granted <strong>ONLY</strong> with authorization from:<br><br>
      <strong>📞 0710 700 762</strong><br><br>

      <a href="Lutheran Youths Database.xlsx" download>
        Download Youth Database (Excel)
      </a><br><br>

      <em>Unauthorized access or sharing is prohibited.</em>
    </div>
  </div>
</section>

<section>
  <h2>Church Location</h2>
  <iframe src="https://www.google.com/maps?q=Itierio%20Lutheran%20Church&output=embed"></iframe>
</section>

<footer>
  © 2026 Itierio Lutheran Youth Department | Serving God Through Youth
</footer>

</body>
</html>

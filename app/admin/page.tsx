
'use client';

import { useMemo, useState } from 'react';

type PageKey = 'dashboard' | 'enrollments' | 'programs' | 'settings' | 'login';
type StatusKey = 'pending' | 'approved' | 'waitlisted' | 'rejected';

type Enrollment = {
  id: number;
  child: string;
  parent: string;
  email: string;
  phone: string;
  age: string;
  program: string;
  message?: string;
  status: StatusKey;
  date: string;
  notes?: string;
  avatarColor: string;
};

const pages: PageKey[] = ['dashboard', 'enrollments', 'programs', 'settings', 'login'];

const crumbs: Record<PageKey, string> = {
  dashboard: 'Dashboard',
  enrollments: 'Enrollments',
  programs: 'Programs',
  settings: 'Settings',
  login: 'Login Page',
};

const monthData = [
  { m: 'Oct', total: 3, app: 2 },
  { m: 'Nov', total: 5, app: 4 },
  { m: 'Dec', total: 2, app: 1 },
  { m: 'Jan', total: 8, app: 6 },
  { m: 'Feb', total: 11, app: 8 },
  { m: 'Mar', total: 8, app: 3 },
];

const enrollmentsData: Enrollment[] = [
  {
    id: 1,
    child: 'Sofia Reyes',
    parent: 'Maria Reyes',
    email: 'maria@email.com',
    phone: '+63 912 111',
    age: '5 yrs old',
    program: 'Kindergarten Ready',
    message: 'Loves drawing and music.',
    status: 'approved',
    date: 'Mar 1',
    notes: 'Slot confirmed for June.',
    avatarColor: '#7c3aed',
  },
  {
    id: 2,
    child: 'Carlos Lim',
    parent: 'Jose Lim',
    email: 'jose@email.com',
    phone: '+63 917 444',
    age: '4 yrs old',
    program: 'Casa dei Bambini',
    message: 'Curious about animals.',
    status: 'pending',
    date: 'Mar 5',
    avatarColor: '#059669',
  },
  {
    id: 3,
    child: 'Mia Cruz',
    parent: 'Ana Cruz',
    email: 'ana@email.com',
    phone: '+63 918 777',
    age: '3 yrs old',
    program: 'Casa dei Bambini',
    message: 'Twin sisters.',
    status: 'pending',
    date: 'Mar 6',
    avatarColor: '#d97706',
  },
  {
    id: 4,
    child: 'Lia Cruz',
    parent: 'Ana Cruz',
    email: 'ana@email.com',
    phone: '+63 918 777',
    age: '3 yrs old',
    program: 'Casa dei Bambini',
    message: 'Twin sisters.',
    status: 'approved',
    date: 'Mar 6',
    notes: 'One slot confirmed.',
    avatarColor: '#10b981',
  },
  {
    id: 5,
    child: 'Lucas Santos',
    parent: 'Ben Santos',
    email: 'ben@email.com',
    phone: '+63 920 333',
    age: '2 yrs old',
    program: 'Toddler Explorers',
    status: 'waitlisted',
    date: 'Mar 10',
    notes: 'Waiting for slot in July.',
    avatarColor: '#2563eb',
  },
  {
    id: 6,
    child: 'Emma Uy',
    parent: 'Carla Uy',
    email: 'carla@email.com',
    phone: '+63 915 222',
    age: '6 yrs old',
    program: 'Kindergarten Ready',
    message: 'Already reads basic words.',
    status: 'rejected',
    date: 'Mar 12',
    notes: 'Age exceeds limit.',
    avatarColor: '#dc2626',
  },
  {
    id: 7,
    child: 'Sam Dela Cruz',
    parent: 'Roy Dela Cruz',
    email: 'roy@email.com',
    phone: '+63 919 888',
    age: '1 yr old',
    program: 'Toddler Explorers',
    message: 'Very active baby!',
    status: 'pending',
    date: 'Mar 14',
    avatarColor: '#9333ea',
  },
  {
    id: 8,
    child: 'Ella Tan',
    parent: 'Lorna Tan',
    email: 'lorna@email.com',
    phone: '+63 916 555',
    age: '4 yrs old',
    program: 'Casa dei Bambini',
    message: 'Bilingual.',
    status: 'approved',
    date: 'Mar 15',
    notes: 'June batch confirmed.',
    avatarColor: '#0891b2',
  },
];

const badgeClassMap: Record<StatusKey, string> = {
  pending: 'badge pending',
  approved: 'badge approved',
  rejected: 'badge rejected',
  waitlisted: 'badge waitlisted',
};

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function AdminPage() {
  const [activePage, setActivePage] = useState<PageKey>('dashboard');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | StatusKey>('all');
  const [selectedEnrollment, setSelectedEnrollment] = useState<Enrollment | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<StatusKey>('pending');
  const [notifNewInquiry, setNotifNewInquiry] = useState(true);
  const [notifDailySummary, setNotifDailySummary] = useState(true);
  const [notifLowCapacity, setNotifLowCapacity] = useState(false);

  const maxVal = Math.max(...monthData.map((d) => d.total));

  const filteredEnrollments = useMemo(() => {
    return enrollmentsData.filter((item) => {
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      const query = search.trim().toLowerCase();
      const matchesSearch = !query || `${item.child} ${item.parent} ${item.program} ${item.status}`.toLowerCase().includes(query);
      return matchesStatus && matchesSearch;
    });
  }, [search, statusFilter]);

  const counts = {
    all: enrollmentsData.length,
    pending: enrollmentsData.filter((e) => e.status === 'pending').length,
    approved: enrollmentsData.filter((e) => e.status === 'approved').length,
    waitlisted: enrollmentsData.filter((e) => e.status === 'waitlisted').length,
    rejected: enrollmentsData.filter((e) => e.status === 'rejected').length,
  };

  const openEnrollment = (item: Enrollment) => {
    setSelectedEnrollment(item);
    setSelectedStatus(item.status);
  };

  const renderDashboard = () => (
    <>
      <div className="pgTitle">Good morning! 🦉</div>
      <div className="pgSub">Here&apos;s what&apos;s happening at Bambini today.</div>

      <div className="statsGrid">
        <div className="statCard">
          <div className="statIcon">📋</div>
          <div className="statVal purple">8</div>
          <div className="statLbl">Total Inquiries</div>
          <div className="statDelta green">↑ 3 this week</div>
        </div>
        <div className="statCard">
          <div className="statIcon">⏳</div>
          <div className="statVal orange">3</div>
          <div className="statLbl">Pending Review</div>
          <div className="statDelta orange">Needs attention</div>
        </div>
        <div className="statCard">
          <div className="statIcon">✅</div>
          <div className="statVal green">4</div>
          <div className="statLbl">Approved</div>
          <div className="statDelta green">↑ 2 this month</div>
        </div>
        <div className="statCard">
          <div className="statIcon">📌</div>
          <div className="statVal blue">1</div>
          <div className="statLbl">Waitlisted</div>
          <div className="statDelta muted">1 slot opening</div>
        </div>
      </div>

      <div className="rowTwo">
        <div className="card">
          <div className="cardHeader">
            <span className="cardTitle">Monthly Enrollments</span>
            <span className="smallMuted">Last 6 months</span>
          </div>
          <div className="chartArea">
            {monthData.map((item) => {
              const h1 = Math.round((item.total / maxVal) * 90) + 10;
              const h2 = Math.round((item.app / maxVal) * 90) + 5;

              return (
                <div className="barGroup" key={item.m}>
                  <div className="bar lightPurple" style={{ height: `${h1}px` }} title={`Inquiries: ${item.total}`} />
                  <div className="bar purpleBg" style={{ height: `${h2}px` }} title={`Approved: ${item.app}`} />
                </div>
              );
            })}
          </div>
          <div className="chartLabels">
            {monthData.map((item) => (
              <div className="chartLabel" key={item.m}>
                {item.m}
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="cardHeader">
            <span className="cardTitle">Program Capacity</span>
          </div>
          <div className="progList">
            <div className="progItem">
              <div className="progRow">
                <span className="progName">Toddler Explorers</span>
                <span className="progPct purple">80%</span>
              </div>
              <div className="progBarBg"><div className="progBarFill purpleBg" style={{ width: '80%' }} /></div>
              <div className="tinyMuted">12 / 15 enrolled</div>
            </div>
            <div className="progItem">
              <div className="progRow">
                <span className="progName">Casa dei Bambini</span>
                <span className="progPct green">90%</span>
              </div>
              <div className="progBarBg"><div className="progBarFill greenBg" style={{ width: '90%' }} /></div>
              <div className="tinyMuted">18 / 20 enrolled</div>
            </div>
            <div className="progItem">
              <div className="progRow">
                <span className="progName">Kindergarten Ready</span>
                <span className="progPct blue">93%</span>
              </div>
              <div className="progBarBg"><div className="progBarFill blueBg" style={{ width: '93%' }} /></div>
              <div className="tinyMuted">14 / 15 enrolled</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="cardHeader">
          <span className="cardTitle">Recent Inquiries</span>
          <button className="linkBtn" onClick={() => setActivePage('enrollments')}>
            View all →
          </button>
        </div>
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>Child</th>
                <th>Parent</th>
                <th>Program</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {enrollmentsData.slice(0, 4).map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="cellName">
                      <div className="avatar" style={{ backgroundColor: item.avatarColor }}>{initials(item.child)}</div>
                      <div>
                        <div className="nameMain">{item.child}</div>
                        <div className="nameSub">{item.age.replace(' old', '')}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.parent}</td>
                  <td>{item.program}</td>
                  <td><span className={badgeClassMap[item.status]}>{item.status}</span></td>
                  <td className="smallMuted">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  const renderEnrollments = () => (
    <>
      <div className="pgTitle">Enrollments</div>
      <div className="pgSub">Manage all enrollment inquiries and applications.</div>

      <div className="filters">
        <button className={`filterBtn ${statusFilter === 'all' ? 'on' : ''}`} onClick={() => setStatusFilter('all')}>
          All ({counts.all})
        </button>
        <button className={`filterBtn ${statusFilter === 'pending' ? 'on' : ''}`} onClick={() => setStatusFilter('pending')}>
          Pending ({counts.pending})
        </button>
        <button className={`filterBtn ${statusFilter === 'approved' ? 'on' : ''}`} onClick={() => setStatusFilter('approved')}>
          Approved ({counts.approved})
        </button>
        <button className={`filterBtn ${statusFilter === 'waitlisted' ? 'on' : ''}`} onClick={() => setStatusFilter('waitlisted')}>
          Waitlisted ({counts.waitlisted})
        </button>
        <button className={`filterBtn ${statusFilter === 'rejected' ? 'on' : ''}`} onClick={() => setStatusFilter('rejected')}>
          Rejected ({counts.rejected})
        </button>
        <button className="actionBtn primary mlAuto">+ Export CSV</button>
      </div>

      <div className="enrGrid">
        <div className="card">
          <div className="tableWrap">
            <table>
              <thead>
                <tr>
                  <th>Child</th>
                  <th>Program</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredEnrollments.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="cellName">
                        <div className="avatar" style={{ backgroundColor: item.avatarColor }}>{initials(item.child)}</div>
                        <div>
                          <div className="nameMain">{item.child}</div>
                          <div className="nameSub">{item.parent} · {item.age.replace(' old', '')}</div>
                        </div>
                      </div>
                    </td>
                    <td className="smallText">{item.program}</td>
                    <td><span className={badgeClassMap[item.status]}>{item.status}</span></td>
                    <td className="smallMuted">{item.date}</td>
                    <td>
                      <button className="actionBtn" onClick={() => openEnrollment(item)}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="detailPanel">
          {!selectedEnrollment ? (
            <div className="emptyPanel">
              <div className="emptyIcon">👆</div>
              Select a row to view enrollment details
            </div>
          ) : (
            <>
              <div className="panelTop">
                <div className="avatar big" style={{ backgroundColor: '#7c3aed' }}>{initials(selectedEnrollment.child)}</div>
                <div>
                  <div className="panelName">{selectedEnrollment.child}</div>
                  <div className="panelAge">{selectedEnrollment.age}</div>
                </div>
              </div>

              <div>
                <div className="dpSection">Child Info</div>
                <div className="dpField">
                  <span className="dpLabel">Program</span>
                  <span className="dpValue">{selectedEnrollment.program}</span>
                </div>
              </div>

              <div>
                <div className="dpSection">Parent / Guardian</div>
                <div className="dpField">
                  <span className="dpLabel">Name</span>
                  <span className="dpValue">{selectedEnrollment.parent}</span>
                </div>
                <div className="dpField">
                  <span className="dpLabel">Email</span>
                  <span className="dpValue purple">{selectedEnrollment.email}</span>
                </div>
                <div className="dpField">
                  <span className="dpLabel">Phone</span>
                  <span className="dpValue">{selectedEnrollment.phone}</span>
                </div>
                {selectedEnrollment.message && (
                  <div className="dpField">
                    <span className="dpLabel">Message</span>
                    <span className="dpValue italic">“{selectedEnrollment.message}”</span>
                  </div>
                )}
              </div>

              <div>
                <div className="dpSection">Update Status</div>
                <div className="dpStatusRow">
                  {(['pending', 'approved', 'waitlisted', 'rejected'] as StatusKey[]).map((status) => (
                    <button
                      key={status}
                      className={`dpStatusBtn ${selectedStatus === status ? 'sel' : ''}`}
                      onClick={() => setSelectedStatus(status)}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {selectedEnrollment.notes && (
                <div className="dpField">
                  <span className="dpLabel">Admin Notes</span>
                  <span className="dpValue">{selectedEnrollment.notes}</span>
                </div>
              )}

              <div className="panelActions">
                <button className="actionBtn primary grow">Save</button>
                <button className="actionBtn grow" onClick={() => setSelectedEnrollment(null)}>Close</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );

  const renderPrograms = () => (
    <>
      <div className="pgTitle">Programs</div>
      <div className="pgSub">Manage Montessori programs and their details.</div>

      <div className="programGrid">
        <ProgramCard icon="🐣" name="Toddler Explorers" age="Ages 1–2 · Half Day" value="12 / 15" width="80%" colorClass="purpleBg" />
        <ProgramCard icon="🌿" name="Casa dei Bambini" age="Ages 3–4 · Full Day" value="18 / 20" width="90%" colorClass="greenBg" />
        <ProgramCard icon="🎓" name="Kindergarten Ready" age="Ages 5–6 · Full Day" value="14 / 15" width="93%" colorClass="blueBg" />
      </div>

      <div className="card">
        <div className="cardHeader"><span className="cardTitle">Weekly Schedule</span></div>
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="smallMuted">7:30–8:00</td><td colSpan={5} className="purple smallText strong">Arrival & Free Work (All Programs)</td></tr>
              <tr><td className="smallMuted">8:00–10:00</td><td colSpan={5} className="smallText">Montessori Work Time</td></tr>
              <tr><td className="smallMuted">10:00–10:30</td><td colSpan={5} className="green smallText strong">Snack & Outdoor Play</td></tr>
              <tr><td className="smallMuted">10:30–11:30</td><td colSpan={5} className="smallText">Montessori Work Time (cont.)</td></tr>
              <tr>
                <td className="smallMuted">11:30</td>
                <td className="orange smallText">Dismissal</td>
                <td className="orange smallText">Dismissal</td>
                <td colSpan={3} className="smallText">Lunch (Full Day Only)</td>
              </tr>
              <tr><td className="smallMuted">3:30</td><td>—</td><td>—</td><td colSpan={3} className="purple smallText strong">Dismissal (Full Day)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  const renderSettings = () => (
    <>
      <div className="pgTitle">Settings</div>
      <div className="pgSub">Manage school info, notifications, and system preferences.</div>

      <div className="setSection">
        <div className="setHd"><span className="cardTitle">School Information</span></div>
        <div className="setBody">
          <div className="inputGrid">
            <div><label className="fieldLabel">School Name</label><input className="fieldInput" defaultValue="Bambini Smart Beginners" /></div>
            <div><label className="fieldLabel">Contact Email</label><input className="fieldInput" defaultValue="hello@bambini.edu.ph" /></div>
            <div><label className="fieldLabel">Phone</label><input className="fieldInput" defaultValue="+63 912 345 6789" /></div>
            <div><label className="fieldLabel">Address</label><input className="fieldInput" defaultValue="Davao City, Philippines" /></div>
          </div>
          <button className="actionBtn primary">Save Changes</button>
        </div>
      </div>

      <div className="setSection">
        <div className="setHd"><span className="cardTitle">Notifications</span></div>
        <div className="setBody noTopPad">
          <SettingRow label="Email on new inquiry" desc="Get an email whenever a new enrollment is submitted" value={notifNewInquiry} onChange={setNotifNewInquiry} />
          <SettingRow label="Daily summary report" desc="Receive a daily digest of all activity" value={notifDailySummary} onChange={setNotifDailySummary} />
          <SettingRow label="Low capacity alert" desc="Alert when a program reaches 90% capacity" value={notifLowCapacity} onChange={setNotifLowCapacity} />
        </div>
      </div>

      <div className="setSection">
        <div className="setHd"><span className="cardTitle">Admin Account</span></div>
        <div className="setBody">
          <div className="inputGrid twoCols">
            <div><label className="fieldLabel">Username</label><input className="fieldInput" defaultValue="admin" /></div>
            <div><label className="fieldLabel">New Password</label><input className="fieldInput" type="password" placeholder="••••••••" /></div>
          </div>
          <button className="actionBtn primary mt12">Update Credentials</button>
        </div>
      </div>
    </>
  );

  const renderLoginPreview = () => (
    <>
      <div className="pgTitle">Login Page</div>
      <div className="pgSub">Preview of the admin login screen.</div>

      <div className="card loginCard">
        <div className="loginWrap">
          <div className="loginLeft">
            <div className="loginOwlBig">🦉</div>
            <div className="loginBrand">Bambini Admin</div>
            <div className="loginTagline">Manage your school from one place</div>
            <div className="loginFeatures">
              <div className="lfItem"><span className="lfIco">📊</span><span className="lfTxt">Analytics</span></div>
              <div className="lfItem"><span className="lfIco">🎓</span><span className="lfTxt">Enrollments</span></div>
              <div className="lfItem"><span className="lfIco">📚</span><span className="lfTxt">Programs</span></div>
            </div>
          </div>
          <div className="loginRight">
            <div className="loginForm">
              <div className="loginTitle">Welcome back</div>
              <div className="loginSub">Sign in to your admin account</div>
              <label className="fieldLabel">Username</label>
              <input className="fieldInput" placeholder="admin" />
              <label className="fieldLabel">Password</label>
              <input className="fieldInput" type="password" placeholder="••••••••" />
              <button className="loginBtn">Sign In →</button>
              <div className="loginHint"><b>Default:</b> admin / bambini2025<br />Change in .env.local</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="admShell">
      <aside className="sidebar">
        <div className="sbLogo">
          <div className="sbOwl">🦉</div>
          <div>
            <div className="sbBrand">Bambini</div>
            <div className="sbSub">Admin Panel</div>
          </div>
        </div>

        <div className="sbSection">Main</div>
        <button className={`sbLink ${activePage === 'dashboard' ? 'active' : ''}`} onClick={() => setActivePage('dashboard')}><span className="ico">▦</span> Dashboard</button>
        <button className={`sbLink ${activePage === 'enrollments' ? 'active' : ''}`} onClick={() => setActivePage('enrollments')}><span className="ico">🎓</span> Enrollments <span className="sbBadge">3</span></button>
        <button className={`sbLink ${activePage === 'programs' ? 'active' : ''}`} onClick={() => setActivePage('programs')}><span className="ico">📚</span> Programs</button>

        <div className="sbSection">System</div>
        <button className={`sbLink ${activePage === 'settings' ? 'active' : ''}`} onClick={() => setActivePage('settings')}><span className="ico">⚙</span> Settings</button>
        <button className={`sbLink ${activePage === 'login' ? 'active' : ''}`} onClick={() => setActivePage('login')}><span className="ico">🔒</span> Login Page</button>

        <div className="sbBottom">
          <div className="sbUser">
            <div className="sbAvatar">AD</div>
            <div>
              <div className="sbUname">Administrator</div>
              <div className="sbUrole">admin@bambini.edu.ph</div>
            </div>
          </div>
        </div>
      </aside>

      <main className="mainPanel">
        <div className="topbar">
          <span className="tbCrumb">Bambini / <b>{crumbs[activePage]}</b></span>
          <input
            className="tbSearch"
            placeholder="Search enrollments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="tbIcon">🔔<div className="tbDot" /></div>
          <div className="tbAv">AD</div>
        </div>

        <div className="contentArea">
          {activePage === 'dashboard' && renderDashboard()}
          {activePage === 'enrollments' && renderEnrollments()}
          {activePage === 'programs' && renderPrograms()}
          {activePage === 'settings' && renderSettings()}
          {activePage === 'login' && renderLoginPreview()}
        </div>
      </main>
    </div>
  );
}

function ProgramCard({
  icon,
  name,
  age,
  value,
  width,
  colorClass,
}: {
  icon: string;
  name: string;
  age: string;
  value: string;
  width: string;
  colorClass: string;
}) {
  return (
    <div className="programCard">
      <div className="programIcon">{icon}</div>
      <div className="programName">{name}</div>
      <div className="programAge">{age}</div>
      <div className="programCap">
        <span className="programCapLabel">Enrolled</span>
        <span className="programCapVal">{value}</span>
      </div>
      <div className="progBarBg"><div className={`progBarFill ${colorClass}`} style={{ width }} /></div>
      <div className="programActions">
        <button className="actionBtn primary grow">Edit</button>
        <button className="actionBtn grow">Schedule</button>
      </div>
    </div>
  );
}

function SettingRow({
  label,
  desc,
  value,
  onChange,
}: {
  label: string;
  desc: string;
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="setRow">
      <div>
        <div className="setLbl">{label}</div>
        <div className="setDesc">{desc}</div>
      </div>
      <button className={`toggle ${value ? 'on' : 'off'}`} onClick={() => onChange(!value)}>
        <div className="toggleDot" />
      </button>
    </div>
  );
}





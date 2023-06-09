function AdminInfo(props)
{
  return (
    <div className="admin-info-container">
      <p className="admin-frame-heading">Admin Information</p>
        <div className="info-container">
          <div>
            <p className="admin-info-frame-sub-heading">Name</p>
            <p className="admin-info-frame-det">Dylan Susanto</p>
          </div>
          <div>
            <p className="admin-info-frame-sub-heading">Phone Number</p>
            <p className="admin-info-frame-det">+91 8946344645</p>
          </div>
          <div>
            <p className="admin-info-frame-sub-heading">Date Of Joining</p>
            <p className="admin-info-frame-det">20 May, 2003</p>
          </div>
          <div>
            <p className="admin-info-frame-sub-heading">Email Address</p>
            <p className="admin-info-frame-det">dylananto@gmail.com</p>
          </div>
          <div>
            <p className="admin-info-frame-sub-heading">Country</p>
            <p className="admin-info-frame-det">India</p>
          </div>
          <div>
            <p className="admin-info-frame-sub-heading">City/State</p>
            <p className="admin-info-frame-det">Coimbatore, Tamilnadu</p>
          </div>
        </div>
    </div>
  )
}

export default AdminInfo;
export default function Modal({ title, onClose, children }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
             <div className="signal-nodes"><span></span><span></span></div>
             <h2 className="t-mono" style={{ color: 'var(--clr-text)', fontWeight: 'bold' }}>{title}</h2>
          </div>
          <button className="modal-close" onClick={onClose}>X</button>
        </div>

        <div className="modal-body">
          {children}
        </div>

      </div>
    </div>
  );
}
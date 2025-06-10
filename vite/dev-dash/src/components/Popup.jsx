function Popup({alert}) {
    return (
        <>
          <div className="popup">
            <span>{alert}</span>
            <div className="popup__btns">
                <button className="popup__btn">Confirm</button>
                <button className="popup__btn popup__btn--cancel">Cancel</button>
            </div>
            <div classNaem="backdrop"></div>
            </div>  
        </>
    );
}

export default Popup;
import React from "react";
import { FaList, FaStar, FaSearch, FaSearchPlus } from "react-icons/fa";
import PropTypes from 'prop-types';

const stats = [
    { id: 1, icon: <FaList />, text: "To Do List", redirect: "/toDoList" },
    { id: 2, icon: <FaSearch />, text: "Search Bar", redirect: "/searchBar" },
    { id: 3, icon: <FaSearchPlus />, text: "Real Time Search", redirect: "/realTimeSearch" },
    { id: 4, icon: <FaStar />, text: "Star Rating", redirect: "/starRating" },
];

const CountUpAnimation = ({
    iconComponent,
    text,
    clickHandler
}) => {
    return (
        // <div style={{ display: 'flex', alignItems: 'center', spaceX: '4px', padding: '16px', backgroundColor: '#f7fafc', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
        //     <div style={{ color: '#3b82f6', fontSize: '24px' }}>{iconComponent}</div>
        //     <span style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937' }}>{text}</span>
        //     <button
        //         onClick={clickHandler}
        //         style={{ padding: '8px 16px', backgroundColor: '#2563eb', color: 'white', fontWeight: '600', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s', outline: 'none', border: 'none' }}
        //     >
        //         Click Me
        //     </button>
        // </div>


        <div className="container">
            <div className="icon">{iconComponent}</div>
            <span className="text">{text}</span>
            <button style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#1E40AF',
                color: 'white',
                fontWeight: '600',
                borderRadius: '0.5rem',
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.3s',
                outline: 'none',
                border: 'none'
            }} onClick={clickHandler} tabIndex="0">Click Me</button>
        </div> 
    );

};

function Dashboard() {
    return (
        <div>
            <h2>My Application Tasks</h2>
            <div className="wrapper">
                {stats.map((stat, index) => (
                    <CountUpAnimation
                        key={stat.id}
                        iconComponent={stat.icon}
                        text={stat.text}
                        clickHandler={() => { window.location.href = stat.redirect }}
                        redirect={stat.redirect}
                    />
                ))}
            </div>
        </div>
    );
}
CountUpAnimation.propTypes = {
    iconComponent: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    redirect: PropTypes.string.isRequired,
};

export default Dashboard;
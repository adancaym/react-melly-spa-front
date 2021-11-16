import './sidebar.css'

interface SidebarProps {
    className: string
}

export const Sidebar = ({className}: SidebarProps) => {
    return (
        <div className={className + ' sidebar'}>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="float-left">-</span> <span className="float-left">1</span>
                </li>
                <li className="list-group-item">
                    <span className="float-left">-</span> <span className="float-left">2</span>
                </li>
                <li className="list-group-item">
                    <span className="float-left">-</span> <span className="float-left">3</span>
                </li>
                <li className="list-group-item">
                    <span className="float-left">-</span> <span className="float-left">4</span>
                </li>
                <li className="list-group-item">
                    <span className="float-left">-</span> <span className="float-left">6</span>
                </li>
                <li className="list-group-item">
                    <span className="float-left">-</span> <span className="float-left">7</span>
                </li>
                <li className="list-group-item">
                    <span className="float-left">-</span> <span className="float-left">8</span>
                </li>
                <li className="list-group-item">
                    <span className="float-left">-</span> <span className="float-left">9</span>
                </li>
                <li className="list-group-item">
                    <span className="float-left">-</span> <span className="float-left">0</span>
                </li>
                <li className="list-group-item">
                    <span className="float-left">-</span> <span className="float-left">10</span>
                </li>
            </ul>
        </div>
    );
}

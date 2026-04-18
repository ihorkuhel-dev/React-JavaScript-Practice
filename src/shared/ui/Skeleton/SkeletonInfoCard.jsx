import '../InfoCard/InfoCard.scss';
import Skeleton from './Skeleton';

export default function SkeletonInfoCard({ rows = 5, className = '' }) {
    return (
        <div className={`info-card__list ${className}`}>
            <div className="header">
                <h2><Skeleton variant="text" width="150px" height="30px" /></h2>
                <div className="tool-bar">
                    <Skeleton variant="circular" width="40px" height="40px" />
                </div>
            </div>
            <dl>
                {Array.from({ length: rows }).map((_, index) => (
                    <div className="info-card__row" key={index}>
                        <dt className="info-card__term">
                            <Skeleton variant="text" width="60%" />
                        </dt>
                        <dd className="info-card__desc">
                            <Skeleton variant="text" width="80%" />
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contact } from '../../data/resumeData';
import './Address.scss';

const Address = () => {
  return (
    <div className="address">
      {contact.map((item) => (
        <dl key={item.label} className="address__item">
          <dt>
            <FontAwesomeIcon icon={item.icon} />
          </dt>

          <dd>
            <strong>{item.label}:</strong>{' '}
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </dd>
        </dl>
      ))}
    </div>
  );
};

export default Address;
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import classes from './Language.module.css';
const languages = [
  {
    code: 'hi',
    name: 'हिन्दी',
    country_code: 'in'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr'
  }
];

const Language = (props: any) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('Issue Tracker');
  }, [t]);

  return (
    <div className={'language-container'}>
      <DropdownButton
        variant="secondary"
        id={
          props.flag ? `${classes['dropdown-true-button']}` : `${classes['dropdown-false-button']}`
        }
        title={t('LANGUAGE')}
        className={classes['dropdown-custom']}>
        {languages.map(({ code, name, country_code }) => (
          <Dropdown.Item
            as="button"
            key={country_code}
            onClick={() => i18next.changeLanguage(code)}>
            {name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default Language;

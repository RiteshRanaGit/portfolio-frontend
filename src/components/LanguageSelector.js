import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { languages, countryToLanguage } from '../i18n';

const LanguageButton = styled.button`
  background: transparent;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.base};
  min-width: 90px;
  text-align: center;
  
  span {
    display: flex;
    align-items: center;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.white};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 80px;
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  min-width: 320px;
  max-height: 400px;
  overflow: hidden;
  z-index: 1000;
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.2s ease;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 280px;
    max-height: 300px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const LanguageList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundDark};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 3px;
  }
`;

const Section = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.div`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.backgroundDark};
`;

const LanguageItem = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  background: ${({ $isActive }) => $isActive ? 'rgba(255, 107, 74, 0.1)' : 'transparent'};
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.primary : theme.colors.text.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-align: left;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 107, 74, 0.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Flag = styled.span`
  font-size: 18px;
  min-width: 24px;
`;

const LanguageNames = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const LanguageName = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const NativeName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestedLanguages, setSuggestedLanguages] = useState([]);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const currentLanguage = languages[i18n.language] || languages.en;

  // Get user's location and suggest languages
  useEffect(() => {
    const getSuggestedLanguages = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code;
        
        if (countryToLanguage[countryCode]) {
          setSuggestedLanguages(countryToLanguage[countryCode]);
        } else {
          setSuggestedLanguages(['en']); // Default to English
        }
      } catch (error) {
        setSuggestedLanguages(['en']); // Fallback to English
      }
    };

    getSuggestedLanguages();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    setSearchTerm('');
  };

  const filteredLanguages = Object.entries(languages).filter(([code, lang]) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedLanguages = {
    suggested: filteredLanguages.filter(([code]) => suggestedLanguages.includes(code)),
    indian: filteredLanguages.filter(([, lang]) => lang.region === 'indian'),
    international: filteredLanguages.filter(([, lang]) => lang.region === 'international')
  };

  return (
    <DropdownContainer>
      <LanguageButton
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('language.selector.title')}
      >
        <span>{currentLanguage.nativeName}</span>
        <span style={{ fontSize: '12px', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
          ▼
        </span>
      </LanguageButton>

      <Dropdown ref={dropdownRef} $isOpen={isOpen}>
        <SearchInput
          type="text"
          placeholder={t('language.selector.search')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <LanguageList>
          {/* Suggested Languages */}
          {groupedLanguages.suggested.length > 0 && (
            <Section>
              <SectionTitle>{t('language.selector.suggested')}</SectionTitle>
              {groupedLanguages.suggested.map(([code, lang]) => (
                <LanguageItem
                  key={code}
                  $isActive={i18n.language === code}
                  onClick={() => changeLanguage(code)}
                >
                  <Flag>{lang.flag}</Flag>
                  <LanguageNames>
                    <LanguageName>{lang.name}</LanguageName>
                    <NativeName>{lang.nativeName}</NativeName>
                  </LanguageNames>
                </LanguageItem>
              ))}
            </Section>
          )}

          {/* Indian Languages */}
          {groupedLanguages.indian.length > 0 && (
            <Section>
              <SectionTitle>{t('language.selector.indian')}</SectionTitle>
              {groupedLanguages.indian.map(([code, lang]) => (
                <LanguageItem
                  key={code}
                  $isActive={i18n.language === code}
                  onClick={() => changeLanguage(code)}
                >
                  <Flag>{lang.flag}</Flag>
                  <LanguageNames>
                    <LanguageName>{lang.name}</LanguageName>
                    <NativeName>{lang.nativeName}</NativeName>
                  </LanguageNames>
                </LanguageItem>
              ))}
            </Section>
          )}

          {/* International Languages */}
          {groupedLanguages.international.length > 0 && (
            <Section>
              <SectionTitle>{t('language.selector.international')}</SectionTitle>
              {groupedLanguages.international.map(([code, lang]) => (
                <LanguageItem
                  key={code}
                  $isActive={i18n.language === code}
                  onClick={() => changeLanguage(code)}
                >
                  <Flag>{lang.flag}</Flag>
                  <LanguageNames>
                    <LanguageName>{lang.name}</LanguageName>
                    <NativeName>{lang.nativeName}</NativeName>
                  </LanguageNames>
                </LanguageItem>
              ))}
            </Section>
          )}
        </LanguageList>
      </Dropdown>
    </DropdownContainer>
  );
};

export default LanguageSelector;
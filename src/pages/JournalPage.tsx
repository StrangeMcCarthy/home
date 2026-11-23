import React from 'react';
import { ReviewsPage } from './ReviewsPage';
import { RoutePath } from '../router/useRouter';

interface JournalPageProps {
  onNavigate: (path: RoutePath, params?: Record<string, string>) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onNavigate }) => {
  return <ReviewsPage onNavigate={onNavigate} />;
};

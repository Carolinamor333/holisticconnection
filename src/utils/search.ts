import type { Coach } from '../types';

export function searchCoaches(coaches: Coach[], searchQuery: string): Coach[] {
  if (!searchQuery.trim()) return coaches;
  
  const query = searchQuery.toLowerCase().trim();
  
  return coaches.filter((coach) => {
    return (
      coach.name.toLowerCase().includes(query) ||
      coach.title.toLowerCase().includes(query) ||
      coach.location.toLowerCase().includes(query) ||
      coach.specializations.some(spec => 
        spec.toLowerCase().includes(query)
      ) ||
      coach.description.toLowerCase().includes(query)
    );
  });
}
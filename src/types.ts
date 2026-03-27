export type Category = 'code' | 'design' | 'writing' | 'growth';

export interface CategoryInfo {
  id: Category;
  label: string;
  icon: string;
  color: string;
  inputLabel: string;
  placeholder: string;
  blinkTitle: string;
  blinkIcon: string;
}

export const CATEGORIES: Record<Category, CategoryInfo> = {
  code: {
    id: 'code',
    label: 'Code',
    icon: 'Github',
    color: '#14F195',
    inputLabel: 'GitHub Username',
    placeholder: '@username',
    blinkTitle: 'Verify Code Mastery',
    blinkIcon: 'Code2'
  },
  design: {
    id: 'design',
    label: 'Design',
    icon: 'Palette',
    color: '#FF00FF',
    inputLabel: 'Portfolio Link',
    placeholder: 'behance.net/...',
    blinkTitle: 'Verify Design Mastery',
    blinkIcon: 'Palette'
  },
  writing: {
    id: 'writing',
    label: 'Writing',
    icon: 'PenTool',
    color: '#00F0FF',
    inputLabel: 'Publication URL',
    placeholder: 'substack.com/...',
    blinkTitle: 'Verify Writing Mastery',
    blinkIcon: 'BookOpen'
  },
  growth: {
    id: 'growth',
    label: 'Growth',
    icon: 'TrendingUp',
    color: '#FFBD00',
    inputLabel: 'Social Handle',
    placeholder: 'x.com/...',
    blinkTitle: 'Verify Growth Mastery',
    blinkIcon: 'Rocket'
  }
};

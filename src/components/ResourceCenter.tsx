import React, { useState } from 'react';
import { 
  BookOpen, 
  Shield, 
  FileText, 
  Video, 
  Users, 
  Download,
  ExternalLink,
  Search,
  Filter
} from 'lucide-react';
import { resources, categories, types } from '../data/resourcesData';

const ResourceCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return BookOpen;
      case 'template': return FileText;
      case 'video': return Video;
      case 'checklist': return Shield;
      case 'whitepaper': return Download;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "guide":
        return "bg-blue bg-opacity-20 text-white";
      case "template":
        return "bg-accent-green bg-opacity-20 text-white";
      case "video":
        return "bg-teal bg-opacity-20 text-white";
      case "checklist":
        return "bg-slate bg-opacity-20 text-white";
      case "whitepaper":
        return "bg-dominant bg-opacity-20 text-white";
      default:
        return "bg-light text-white";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-accent-green bg-opacity-20 text-white";
      case "intermediate":
        return "bg-slate bg-opacity-20 text-white";
      case "advanced":
        return "bg-dominant bg-opacity-20 text-white";
      default:
        return "bg-light text-white";
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="py-16 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dominant mb-4">Security Resource Center</h2>
          <p className="text-lg text-slate max-w-3xl mx-auto">
            Access comprehensive guides, templates, and tools to strengthen your cybersecurity posture
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-slate absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-light rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="w-5 h-5 text-slate absolute left-3 top-1/2 transform -translate-y-1/2" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-light rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-light rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent appearance-none bg-white"
              >
                {types.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate">
            Showing {filteredResources.length} of {resources.length} resources
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const TypeIcon = getTypeIcon(resource.type);
            
            return (
              <div key={resource.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(resource.type)}`}>
                      <TypeIcon className="w-5 h-5" />
                    </div>
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                        {resource.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-dominant mb-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-slate text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-slate">
                      <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(resource.type)}`}>
                        {resource.type}
                      </span>
                      {resource.duration && (
                        <span>{resource.duration}</span>
                      )}
                    </div>
                    
                    {resource.downloadUrl ? (
                      <a 
                        href={resource.downloadUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 px-3 py-1 bg-blue hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                      >
                        <ExternalLink size={14} />
                        <span>View Resource</span>
                      </a>
                    ) : (
                      <button className="flex items-center space-x-1 px-3 py-1 bg-slate hover:bg-slate-700 text-white rounded-lg transition-colors text-sm cursor-not-allowed" disabled>
                        <FileText size={14} />
                        <span>Coming Soon</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Section */}
        <div className="mt-16 bg-gradient-to-br from-light to-light rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dominant mb-4">Featured Resources</h3>
            <p className="text-slate max-w-2xl mx-auto">
              Hand-picked resources to help you get started with cybersecurity best practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue" />
              </div>
              <h4 className="font-semibold text-dominant mb-2">Security Fundamentals</h4>
              <p className="text-sm text-slate">Essential security concepts every organization should implement</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-teal" />
              </div>
              <h4 className="font-semibold text-dominant mb-2">Compliance Templates</h4>
              <p className="text-sm text-slate">Ready-to-use templates for major compliance frameworks</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent-green" />
              </div>
              <h4 className="font-semibold text-dominant mb-2">Training Materials</h4>
              <p className="text-sm text-slate">Comprehensive training programs for your security team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCenter;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DownloadResume = () => {
  const [selectedFormat, setSelectedFormat] = useState('standard');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStats, setDownloadStats] = useState({
    totalDownloads: 1247,
    lastUpdated: 'January 15, 2025'
  });

  const resumeFormats = [
    {
      id: 'standard',
      name: 'Standard Resume',
      description: 'Professional format suitable for most applications',
      format: 'PDF',
      size: '2.1 MB',
      pages: '2 pages',
      icon: 'FileText',
      color: 'primary',
      features: ['Professional Design', 'ATS Optimized', 'Contact Information', 'Work Experience', 'Skills Summary']
    },
    {
      id: 'technical',
      name: 'Technical Resume',
      description: 'Detailed format highlighting technical skills and projects',
      format: 'PDF',
      size: '2.8 MB',
      pages: '3 pages',
      icon: 'Code',
      color: 'secondary',
      features: ['Technical Skills Matrix', 'Project Highlights', 'Certifications', 'Code Samples', 'GitHub Stats']
    },
    {
      id: 'executive',
      name: 'Executive Summary',
      description: 'Concise format focused on leadership and achievements',
      format: 'PDF',
      size: '1.7 MB',
      pages: '1 page',
      icon: 'Award',
      color: 'accent',
      features: ['Executive Summary', 'Key Achievements', 'Leadership Experience', 'Strategic Impact', 'Awards']
    },
    {
      id: 'ats',
      name: 'ATS-Friendly',
      description: 'Plain format optimized for Applicant Tracking Systems',
      format: 'DOC/PDF',
      size: '1.2 MB',
      pages: '2 pages',
      icon: 'Search',
      color: 'warning',
      features: ['Simple Formatting', 'Keyword Optimized', 'Machine Readable', 'Standard Fonts', 'Clean Layout']
    }
  ];

  const customizationOptions = [
    { id: 'colorScheme', name: 'Color Scheme', options: ['Professional Blue', 'Modern Dark', 'Classic Black'] },
    { id: 'sections', name: 'Include Sections', options: ['All Sections', 'Essential Only', 'Custom Selection'] },
    { id: 'experience', name: 'Experience Detail', options: ['Full Detail', 'Summary Only', 'Key Highlights'] },
    { id: 'skills', name: 'Skills Format', options: ['Detailed Matrix', 'Simple List', 'Category Groups'] }
  ];

  const handleDownload = async (formatId) => {
    setIsDownloading(true);
    
    // Simulate download process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update download stats
      setDownloadStats(prev => ({
        ...prev,
        totalDownloads: prev.totalDownloads + 1
      }));

      // In a real application, this would trigger the actual file download
      console.log(`Downloading ${formatId} resume format`);
      
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      primary: 'border-primary/30 bg-primary/5 text-primary',
      secondary: 'border-secondary/30 bg-secondary/5 text-secondary',
      accent: 'border-accent/30 bg-accent/5 text-accent',
      warning: 'border-warning/30 bg-warning/5 text-warning'
    };
    return colors[color] || colors.primary;
  };

  const selectedResumeFormat = resumeFormats.find(format => format.id === selectedFormat);

  return (
    <section className="py-20 bg-muted/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
            Download Professional Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from multiple formats tailored for different application needs and requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Resume Format Selection */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-poppins font-semibold text-foreground mb-6">
              Choose Resume Format
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeFormats.map((format) => (
                <div 
                  key={format.id}
                  className={`bg-card border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-glow ${
                    selectedFormat === format.id 
                      ? `border-${format.color} shadow-lg shadow-${format.color}/10` 
                      : 'border-border hover:border-primary/30'
                  }`}
                  onClick={() => setSelectedFormat(format.id)}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(format.color)}`}>
                      <Icon name={format.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-lg mb-1">
                        {format.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {format.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Icon name="File" size={12} />
                          <span>{format.format}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon name="HardDrive" size={12} />
                          <span>{format.size}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon name="FileText" size={12} />
                          <span>{format.pages}</span>
                        </span>
                      </div>
                    </div>
                    {selectedFormat === format.id && (
                      <Icon name="CheckCircle" size={20} className={`text-${format.color}`} />
                    )}
                  </div>

                  {/* Features */}
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">Includes:</h5>
                    <div className="space-y-1">
                      {format.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Icon name="Check" size={12} className="text-accent mt-1 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                      {format.features.length > 3 && (
                        <div className="text-xs text-muted-foreground">
                          +{format.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Preview & Actions */}
          <div className="space-y-6">
            {/* Preview Card */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-poppins font-semibold text-foreground mb-4">
                Preview & Download
              </h3>
              
              {selectedResumeFormat && (
                <div className="space-y-4">
                  <div className={`w-full h-40 bg-gradient-to-br ${getColorClasses(selectedResumeFormat.color)} rounded-lg flex items-center justify-center border-2 border-dashed`}>
                    <div className="text-center">
                      <Icon name={selectedResumeFormat.icon} size={32} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">
                        {selectedResumeFormat.name}
                      </p>
                      <p className="text-xs opacity-75">
                        {selectedResumeFormat.pages} • {selectedResumeFormat.size}
                      </p>
                    </div>
                  </div>

                  {/* Download Buttons */}
                  <div className="space-y-3">
                    <Button
                      variant="default"
                      fullWidth
                      iconName="Download"
                      iconPosition="left"
                      onClick={() => handleDownload(selectedResumeFormat.id)}
                      disabled={isDownloading}
                      className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                    >
                      {isDownloading ? 'Preparing Download...' : `Download ${selectedResumeFormat.format}`}
                    </Button>
                    
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="Eye"
                      iconPosition="left"
                      className="border-primary/20 text-primary hover:bg-primary/10"
                    >
                      Preview
                    </Button>

                    <Button
                      variant="ghost"
                      fullWidth
                      iconName="Share"
                      iconPosition="left"
                      className="text-secondary hover:text-secondary/80"
                    >
                      Share Link
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Customization Options */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-poppins font-semibold text-foreground mb-4">
                Customization
              </h3>
              
              <div className="space-y-4">
                {customizationOptions.map((option, index) => (
                  <div key={index}>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {option.name}
                    </label>
                    <select className="w-full p-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary/50">
                      {option.options.map((opt, optIndex) => (
                        <option key={optIndex} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Stats */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6">
              <h3 className="text-lg font-poppins font-semibold text-foreground mb-4">
                Resume Statistics
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Downloads</span>
                  <span className="text-sm font-medium text-foreground">
                    {downloadStats.totalDownloads.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Last Updated</span>
                  <span className="text-sm font-medium text-foreground">
                    {downloadStats.lastUpdated}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">File Formats</span>
                  <span className="text-sm font-medium text-foreground">
                    PDF, DOC, TXT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Options */}
        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
              Additional Resources
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive career documents and resources to support your job search
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={24} className="text-primary" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Cover Letter Template</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Professional cover letter templates
              </p>
              <Button variant="outline" size="sm" className="text-primary border-primary/20">
                Download
              </Button>
            </div>

            <div className="bg-background border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Briefcase" size={24} className="text-secondary" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Portfolio Summary</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Curated project portfolio document
              </p>
              <Button variant="outline" size="sm" className="text-secondary border-secondary/20">
                Download
              </Button>
            </div>

            <div className="bg-background border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-accent" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Reference List</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Professional references document
              </p>
              <Button variant="outline" size="sm" className="text-accent border-accent/20">
                Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadResume;
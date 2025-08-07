import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certifications = [
    {
      name: 'AWS Solutions Architect Professional',
      issuer: 'Amazon Web Services',
      category: 'cloud',
      level: 'Professional',
      date: 'January 2023',
      expiry: 'January 2026',
      verified: true,
      credentialId: 'AWS-SAP-12345',
      logo: 'Cloud',
      description: 'Advanced certification covering complex cloud architecture and migration strategies.',
      skills: ['AWS Architecture', 'Migration Planning', 'Cost Optimization', 'Security Best Practices'],
      badge: 'https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png'
    },
    {
      name: 'Google Cloud Professional Cloud Developer',
      issuer: 'Google Cloud',
      category: 'cloud',
      level: 'Professional',
      date: 'March 2022',
      expiry: 'March 2024',
      verified: true,
      credentialId: 'GCP-PCD-67890',
      logo: 'Server',
      description: 'Professional-level certification for developing scalable applications on Google Cloud.',
      skills: ['GCP Services', 'App Engine', 'Kubernetes Engine', 'Cloud Functions'],
      badge: 'https://images.credly.com/size/340x340/images/fb1b8b9e-0c57-4a68-8e64-43e0a5a27b1a/image.png'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      category: 'devops',
      level: 'Professional',
      date: 'June 2022',
      expiry: 'June 2025',
      verified: true,
      credentialId: 'CKA-54321',
      logo: 'Settings',
      description: 'Hands-on certification demonstrating Kubernetes cluster administration skills.',
      skills: ['Cluster Management', 'Networking', 'Storage', 'Security', 'Troubleshooting'],
      badge: 'https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png'
    },
    {
      name: 'Microsoft Azure Developer Associate',
      issuer: 'Microsoft',
      category: 'cloud',
      level: 'Associate',
      date: 'August 2021',
      expiry: 'August 2024',
      verified: true,
      credentialId: 'AZ-204-11111',
      logo: 'Box',
      description: 'Associate-level certification for developing solutions on Microsoft Azure platform.',
      skills: ['Azure Services', 'App Service', 'Azure Functions', 'Cosmos DB'],
      badge: 'https://images.credly.com/size/340x340/images/63316b6c-2c69-4c3c-a6ca-3506dc5989d2/azure-developer-associate-600x600.png'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      category: 'database',
      level: 'Associate',
      date: 'November 2020',
      expiry: 'November 2023',
      verified: true,
      credentialId: 'MDB-DEV-22222',
      logo: 'Database',
      description: 'Professional certification demonstrating MongoDB development expertise.',
      skills: ['MongoDB', 'Aggregation', 'Indexing', 'Replication', 'Sharding'],
      badge: 'https://images.credly.com/size/340x340/images/c99ebebb-e2de-4b28-9e0c-ac9d1da7f599/image.png'
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      category: 'devops',
      level: 'Associate',
      date: 'September 2021',
      expiry: 'September 2024',
      verified: true,
      credentialId: 'DCA-33333',
      logo: 'Package',
      description: 'Certification validating Docker containerization and orchestration skills.',
      skills: ['Containerization', 'Docker Compose', 'Swarm', 'Image Management'],
      badge: 'https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      category: 'frontend',
      level: 'Professional',
      date: 'February 2023',
      expiry: 'February 2026',
      verified: true,
      credentialId: 'META-REACT-44444',
      logo: 'Code',
      description: 'Advanced React development certification covering modern patterns and practices.',
      skills: ['React Hooks', 'Context API', 'Performance Optimization', 'Testing'],
      badge: 'https://images.credly.com/size/340x340/images/4edca085-1b98-4095-93c4-8ec436187750/image.png'
    },
    {
      name: 'Node.js Application Developer',
      issuer: 'Node.js Foundation',
      category: 'backend',
      level: 'Professional',
      date: 'May 2022',
      expiry: 'May 2025',
      verified: true,
      credentialId: 'NODEJS-55555',
      logo: 'Zap',
      description: 'Professional certification for Node.js application development and deployment.',
      skills: ['Express.js', 'API Development', 'Middleware', 'Security', 'Performance'],
      badge: 'https://images.credly.com/size/340x340/images/9f7b2c31-6a19-4c36-b5ca-d9a67a4e2d47/image.png'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certifications', count: certifications.length },
    { id: 'cloud', name: 'Cloud Platforms', count: certifications.filter(c => c.category === 'cloud').length },
    { id: 'devops', name: 'DevOps & Infrastructure', count: certifications.filter(c => c.category === 'devops').length },
    { id: 'frontend', name: 'Frontend Development', count: certifications.filter(c => c.category === 'frontend').length },
    { id: 'backend', name: 'Backend Development', count: certifications.filter(c => c.category === 'backend').length },
    { id: 'database', name: 'Database Management', count: certifications.filter(c => c.category === 'database').length }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Professional': return 'text-accent border-accent/30 bg-accent/10';
      case 'Associate': return 'text-primary border-primary/30 bg-primary/10';
      default: return 'text-muted-foreground border-border bg-muted/20';
    }
  };

  return (
    <section className="py-20 bg-muted/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
            Professional Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating expertise across cloud platforms, 
            development frameworks, and modern technologies
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <div key={index} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-glow group">
              {/* Certificate Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name={cert.logo} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg leading-tight mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  {cert.verified && (
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center space-x-1 px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                        <Icon name="CheckCircle" size={12} />
                        <span>Verified</span>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Certificate Details */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Level:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Issued:</span>
                    <span className="text-sm text-foreground font-medium">{cert.date}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Expires:</span>
                    <span className="text-sm text-foreground font-medium">{cert.expiry}</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-muted-foreground">ID:</span>
                    <span className="text-sm text-muted-foreground font-mono">{cert.credentialId}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 4).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded border border-secondary/20"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-muted/20 text-muted-foreground rounded">
                        +{cert.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Certificate Actions */}
              <div className="px-6 py-4 bg-muted/10 border-t border-border">
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="flex-1 text-primary border-primary/20 hover:bg-primary/10"
                  >
                    Verify
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Download"
                    iconPosition="right"
                    className="flex-1 text-secondary hover:text-secondary/80"
                  >
                    Badge
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Summary */}
        <div className="mt-16 bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
              Continuous Professional Development
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Committed to staying current with industry trends and technologies through ongoing certification and learning
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Active Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Verification Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-secondary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Technology Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-warning mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Study/Week</div>
              </div>
            </div>

            <Button
              variant="default"
              iconName="Trophy"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90"
            >
              View Full Credential Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
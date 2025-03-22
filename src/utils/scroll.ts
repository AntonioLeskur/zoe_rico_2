// Utility function to handle smooth scrolling
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const scrollToSection = (sectionId: string, pathname: string) => {
  // If we're not on the homepage and trying to scroll to a section
  if (pathname !== '/') {
    // Store the section ID to scroll to after navigation
    sessionStorage.setItem('scrollTo', sectionId);
    window.location.href = '/';
    return;
  }
  
  // If we're on the homepage, scroll to the section
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 64; // Height of the navbar (4rem/64px)
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
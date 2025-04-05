const Competences = () => {
    return (
      <div className="skills-container text-center py-8">
        <h2 className="text-2xl font-bold mb-6 text-green">Competences techniques</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="skill-card html">
            <i className="fa-brands fa-html5 text-orange-500 text-4xl"></i>
            <p className="mt-2">HTML</p>
          </div>
          <div className="skill-card css">
            <i className="fa-brands fa-css3-alt text-blue-500 text-4xl"></i>
            <p className="mt-2">CSS</p>
          </div>
          <div className="skill-card js">
            <i className="fa-brands fa-js-square text-yellow-400 text-4xl"></i>
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="skill-card react">
            <i className="fa-brands fa-react text-cyan-400 text-4xl"></i>
            <p className="mt-2">React</p>
          </div>
          <div className="skill-card node">
            <i className="fa-brands fa-laravel text-green-500 text-4xl"></i>
            <p className="mt-2">Laravel</p>
          </div>
          <div className="skill-card python">
            <i className="fa-brands fa-api text-blue-600 text-4xl"></i>
            <p className="mt-2">Express js</p>
          </div>
          <div className="skill-card python">
            <i className="fa-brands fa-vuejs text-blue-600 text-4xl"></i>
            <p className="mt-2">Vue js</p>
          </div>
          <div className="skill-card python">
            <i className="fa-brands fa-tailwinds text-blue-600 text-4xl"></i>
            <p className="mt-2">Tailwind css</p>
          </div>
          <div className="skill-card python">
            <i className="fa-brands fa-angular text-blue-600 text-4xl"></i>
            <p className="mt-2">Angular</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Competences;
  
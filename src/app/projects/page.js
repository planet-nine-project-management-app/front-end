import Link from 'next/link';

const ProjectsPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-[#F5F5DC]">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <header className="w-full bg-white shadow-md flex justify-between items-center px-8 py-4">
          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 rounded-full bg-green-500 hover:w-12 transition-all duration-200"></button>
            <span className="text-green-500 font-semibold">هلا اسم التعريف</span>
          </div>
          <nav className="flex space-x-4 text-right">
            <Link href="/projects" className="hover:underline text-gray-700">
              المشاريع
            </Link>
            <Link href="/dashboard" className="hover:underline text-gray-700">
              داشبور
            </Link>
            <Link href="/management" className="hover:underline text-gray-700">
              لوحات الإدارة
            </Link>
            <Link href="/logout" className="hover:underline text-gray-700">
              الخروج
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center w-full px-4 py-8">
          <div
            className="w-full h-[700px] md:h-[500px] bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: 'url(/login-page-image.png)' }}
          >
            <div className="flex items-center justify-center h-full space-x-4">
              <div className="hidden md:flex flex-col items-center justify-center w-1/4 bg-white/70 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">المشروع الثالث</h2>
                <p className="text-sm">الوصف</p>
                <button className="text-green-500 mt-4">{'←'}</button>
              </div>
              <div className="flex flex-col items-center justify-center w-1/3 bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">المشروع الثاني</h2>
                <p className="text-sm">الوصف</p>
                <button className="text-green-500 mt-4">{'←'}</button>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center w-1/4 bg-white/70 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">مشروع التميز المؤسسي</h2>
                <p className="text-sm">الوصف</p>
                <button className="text-green-500 mt-4">{'←'}</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage;

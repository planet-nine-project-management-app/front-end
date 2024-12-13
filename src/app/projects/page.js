import Link from 'next/link';

const ProjectsPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-[#F5F5DC]">
      <div className="w-full max-w-5xl bg-white rounded-1.5rem shadow-lg overflow-hidden">
        <main className="flex flex-col items-center justify-center w-full">
          <div
            className="w-full h-[800px] md:h-[600px] bg-cover bg-center rounded-1.5rem shadow-lg"
            style={{ backgroundImage: 'url(/projects.png)' }}
          >
            <header className="w-full flex justify-between items-center px-8 py-4">
              <div className="flex items-center space-x-4">
                <button className="w-70 h-10 rounded-full">
                  <span className="full text-white">البحث</span>
                </button>
                <button className="w-80 h-10 rounded-full bg-green-400">
                  <span className="text-white">هلا اسم التعريف</span>
                </button>
              </div>
              <nav className="flex space-x-4 text-right">
                <Link href="/" className="hover:underline text-gray-200">
                  داشبور
                </Link>
                <Link href="/management" className="hover:underline text-gray-200">
                  لوحات الإدارة
                </Link>
                <Link href="/logout" className="hover:underline text-gray-200">
                  الخروج
                </Link>
                <Link href="/projects" className="hover:underline text-white">
                  المشاريع
                </Link>
              </nav>
            </header>
            <div className="flex items-center justify-center h-full space-x-4">
              <div className="hidden md:flex flex-col text-right justify-center w-1/4 p-8 rounded-1.5rem border-[1px] border-white border-solid text-white">
                <h2 className="text-lg font-semibold">المشروع الثالث</h2>
                <button className="text-green-500 mt-4">{'←'}</button>
                <p className="text-sm">الوصف</p>
              </div>
              <div className="flex flex-col text-right justify-center w-1/4 bg-white p-8 rounded-1.5rem shadow-md">
                <h2 className="text-lg font-semibold">المشروع الثاني</h2>
                <p className="text-sm">الوصف</p>
                <button className="text-green-500 mt-4">{'←'}</button>
              </div>
              <div className="hidden md:flex flex-col text-right justify-center w-1/4 p-8 rounded-1.5rem border-[1px] border-white border-solid text-white">
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

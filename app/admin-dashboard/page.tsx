'use client';

import { useEffect, useMemo, useState } from 'react';

interface PricingPlan {
  id: number;
  planType: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  popular: boolean;
  active: boolean;
  features: string[];
  ctaText: string;
  ctaLink: string;
  sortOrder: number;
}

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  status: string;
  publishedAt: string;
  author: string;
}

interface MediaItem {
  id: number;
  name: string;
  url: string;
  type: string;
  createdAt: string;
}

interface SiteSettings {
  siteTitle: string;
  supportEmail: string;
}

const defaultPost = {
  title: '',
  excerpt: '',
  status: 'draft',
  authorName: 'Admin',
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('pricing');
  const [loading, setLoading] = useState(false);

  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [settings, setSettings] = useState<SiteSettings>({
    siteTitle: 'Hostao - Premium Web Hosting',
    supportEmail: 'support@hostao.com',
  });

  const [showAddPlan, setShowAddPlan] = useState(false);
  const [newPlan, setNewPlan] = useState({
    planType: 'shared',
    name: '',
    tagline: '',
    price: '',
    period: 'Per Month*',
    popular: false,
    active: true,
    features: [''],
    ctaText: 'Order Now',
    ctaLink: '',
    sortOrder: 0,
  });

  const [showPostModal, setShowPostModal] = useState(false);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [postForm, setPostForm] = useState(defaultPost);

  const [showMediaModal, setShowMediaModal] = useState(false);
  const [mediaForm, setMediaForm] = useState({ name: '', url: '', type: 'image' });

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    await Promise.all([fetchPricingPlans(), fetchBlogPosts(), fetchMediaItems(), fetchSettings()]);
  };

  const fetchPricingPlans = async () => {
    try {
      const response = await fetch('/api/admin/pricing');
      if (!response.ok) throw new Error('pricing fetch failed');
      setPricingPlans(await response.json());
    } catch {
      setPricingPlans([]);
    }
  };

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('/api/admin/posts');
      if (!response.ok) throw new Error('posts fetch failed');
      setBlogPosts(await response.json());
    } catch {
      setBlogPosts([]);
    }
  };

  const fetchMediaItems = async () => {
    try {
      const response = await fetch('/api/admin/media');
      if (!response.ok) throw new Error('media fetch failed');
      setMediaItems(await response.json());
    } catch {
      setMediaItems([]);
    }
  };

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/admin/settings');
      if (!response.ok) throw new Error('settings fetch failed');
      const data = await response.json();
      setSettings({
        siteTitle: data.siteTitle || 'Hostao - Premium Web Hosting',
        supportEmail: data.supportEmail || 'support@hostao.com',
      });
    } catch {
      // keep defaults
    }
  };

  const handleAddPlan = async () => {
    try {
      const response = await fetch('/api/admin/pricing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlan),
      });

      if (!response.ok) throw new Error('add plan failed');
      await fetchPricingPlans();
      setShowAddPlan(false);
      setNewPlan({
        planType: 'shared',
        name: '',
        tagline: '',
        price: '',
        period: 'Per Month*',
        popular: false,
        active: true,
        features: [''],
        ctaText: 'Order Now',
        ctaLink: '',
        sortOrder: 0,
      });
      alert('Plan added successfully');
    } catch {
      alert('Failed to add plan');
    }
  };

  const savePost = async () => {
    if (!postForm.title.trim()) return alert('Title is required');

    const payload = {
      title: postForm.title,
      slug: slugify(postForm.title),
      excerpt: postForm.excerpt,
      status: postForm.status,
      publishedAt: postForm.status === 'published' ? new Date().toISOString() : null,
      authorName: postForm.authorName || 'Admin',
      content: {},
    };

    const url = editingPostId ? `/api/admin/posts/${editingPostId}` : '/api/admin/posts';
    const method = editingPostId ? 'PUT' : 'POST';

    try {
      setLoading(true);
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('save failed');
      await fetchBlogPosts();
      setShowPostModal(false);
      setEditingPostId(null);
      setPostForm(defaultPost);
      alert(editingPostId ? 'Post updated' : 'Post created');
    } catch {
      alert('Failed to save post');
    } finally {
      setLoading(false);
    }
  };

  const editPost = (post: BlogPost) => {
    setEditingPostId(post.id);
    setPostForm({
      title: post.title,
      excerpt: post.excerpt,
      status: post.status,
      authorName: post.author || 'Admin',
    });
    setShowPostModal(true);
  };

  const deletePost = async (id: number) => {
    if (!confirm('Delete this post?')) return;
    try {
      const res = await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('delete failed');
      await fetchBlogPosts();
      alert('Post deleted');
    } catch {
      alert('Failed to delete post');
    }
  };

  const addMedia = async () => {
    if (!mediaForm.name.trim() || !mediaForm.url.trim()) return alert('Name and URL required');
    try {
      const res = await fetch('/api/admin/media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mediaForm),
      });
      if (!res.ok) throw new Error('add media failed');
      await fetchMediaItems();
      setShowMediaModal(false);
      setMediaForm({ name: '', url: '', type: 'image' });
      alert('Media added');
    } catch {
      alert('Failed to add media');
    }
  };

  const deleteMedia = async (id: number) => {
    if (!confirm('Delete this media item?')) return;
    try {
      const res = await fetch(`/api/admin/media/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('delete media failed');
      await fetchMediaItems();
    } catch {
      alert('Failed to delete media');
    }
  };

  const saveSettings = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      if (!res.ok) throw new Error('settings save failed');
      alert('Settings saved');
    } catch {
      alert('Failed to save settings');
    } finally {
      setLoading(false);
    }
  };

  const addFeature = () => setNewPlan({ ...newPlan, features: [...newPlan.features, ''] });
  const updateFeature = (index: number, value: string) => {
    const updated = [...newPlan.features];
    updated[index] = value;
    setNewPlan({ ...newPlan, features: updated });
  };
  const removeFeature = (index: number) => {
    setNewPlan({ ...newPlan, features: newPlan.features.filter((_, i) => i !== index) });
  };

  const tabs = useMemo(
    () => [
      { id: 'pricing', label: 'Pricing Plans', icon: '💰' },
      { id: 'blog', label: 'Blog Posts', icon: '📝' },
      { id: 'media', label: 'Media Library', icon: '🖼️' },
      { id: 'settings', label: 'Settings', icon: '⚙️' },
    ],
    []
  );

  return (
    <div className="fixed inset-0 z-[99999] bg-gray-50 overflow-auto pointer-events-auto">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Hostao Admin Dashboard</h1>
          <span className="text-sm text-gray-500">{loading ? 'Saving…' : 'Welcome, Admin'}</span>
        </div>
      </header>

      <div className="flex">
        <nav className="bg-white w-64 min-h-screen shadow-sm p-4">
          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                    activeTab === tab.id ? 'bg-blue-100 text-blue-700 border-blue-500' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3 text-lg">{tab.icon}</span>
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex-1 p-6">
          {activeTab === 'pricing' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Pricing Plans</h2>
                <button onClick={() => setShowAddPlan(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Add New Plan</button>
              </div>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pricingPlans.map((plan) => (
                      <tr key={plan.id}>
                        <td className="px-6 py-4"><div className="text-sm font-medium text-gray-900">{plan.name}</div><div className="text-sm text-gray-500">{plan.tagline}</div></td>
                        <td className="px-6 py-4 text-sm">{plan.planType}</td>
                        <td className="px-6 py-4 text-sm">{plan.price} <span className="text-gray-500">{plan.period}</span></td>
                        <td className="px-6 py-4 text-sm">{plan.active ? 'Active' : 'Inactive'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'blog' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Blog Posts</h2>
                <button
                  onClick={() => {
                    setEditingPostId(null);
                    setPostForm(defaultPost);
                    setShowPostModal(true);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  New Post
                </button>
              </div>

              <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {blogPosts.map((post) => (
                      <tr key={post.id}>
                        <td className="px-6 py-4"><div className="text-sm font-medium text-gray-900">{post.title}</div><div className="text-sm text-gray-500">{post.excerpt}</div></td>
                        <td className="px-6 py-4 text-sm">{post.status}</td>
                        <td className="px-6 py-4 text-sm">{post.author}</td>
                        <td className="px-6 py-4 text-sm">
                          <button onClick={() => editPost(post)} className="text-blue-600 hover:text-blue-900 mr-4">Edit</button>
                          <button onClick={() => deletePost(post.id)} className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'media' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Media Library</h2>
                <button onClick={() => setShowMediaModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Add Media URL</button>
              </div>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">URL</th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th></tr></thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mediaItems.map((m) => (
                      <tr key={m.id}>
                        <td className="px-6 py-4 text-sm">{m.name}</td>
                        <td className="px-6 py-4 text-sm">{m.type}</td>
                        <td className="px-6 py-4 text-sm text-blue-700 truncate max-w-sm"><a href={m.url} target="_blank">{m.url}</a></td>
                        <td className="px-6 py-4 text-sm"><button onClick={() => deleteMedia(m.id)} className="text-red-600 hover:text-red-900">Delete</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
              <div className="bg-white shadow rounded-lg p-6 space-y-4 max-w-2xl">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Site Title</label>
                  <input
                    type="text"
                    value={settings.siteTitle}
                    onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
                  <input
                    type="email"
                    value={settings.supportEmail}
                    onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <button onClick={saveSettings} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">Save Settings</button>
              </div>
            </div>
          )}
        </main>
      </div>

      {showAddPlan && (
        <div className="fixed inset-0 z-[100000] bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl max-h-[90vh] overflow-auto">
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Add New Pricing Plan</h3>
              <button onClick={() => setShowAddPlan(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Plan name" value={newPlan.name} onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                <input type="text" placeholder="Tagline" value={newPlan.tagline} onChange={(e) => setNewPlan({ ...newPlan, tagline: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                <input type="text" placeholder="Price" value={newPlan.price} onChange={(e) => setNewPlan({ ...newPlan, price: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                <input type="text" placeholder="CTA Link" value={newPlan.ctaLink} onChange={(e) => setNewPlan({ ...newPlan, ctaLink: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Features</p>
                {newPlan.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <input type="text" value={feature} onChange={(e) => updateFeature(idx, e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-md" />
                    {newPlan.features.length > 1 && <button onClick={() => removeFeature(idx)} className="px-3 py-2 text-red-600 border border-red-200 rounded-md">Remove</button>}
                  </div>
                ))}
                <button onClick={addFeature} className="text-sm text-blue-600 hover:text-blue-800">+ Add Feature</button>
              </div>
            </div>
            <div className="px-6 py-4 border-t flex justify-end gap-3">
              <button onClick={() => setShowAddPlan(false)} className="px-4 py-2 border rounded-md text-gray-700">Cancel</button>
              <button onClick={handleAddPlan} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Plan</button>
            </div>
          </div>
        </div>
      )}

      {showPostModal && (
        <div className="fixed inset-0 z-[100000] bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-lg shadow-xl">
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">{editingPostId ? 'Edit Post' : 'New Post'}</h3>
              <button onClick={() => setShowPostModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div className="p-6 space-y-3">
              <input value={postForm.title} onChange={(e) => setPostForm({ ...postForm, title: e.target.value })} placeholder="Title" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <textarea value={postForm.excerpt} onChange={(e) => setPostForm({ ...postForm, excerpt: e.target.value })} placeholder="Excerpt" className="w-full px-3 py-2 border border-gray-300 rounded-md" rows={3} />
              <div className="grid grid-cols-2 gap-3">
                <input value={postForm.authorName} onChange={(e) => setPostForm({ ...postForm, authorName: e.target.value })} placeholder="Author" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                <select value={postForm.status} onChange={(e) => setPostForm({ ...postForm, status: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>
            <div className="px-6 py-4 border-t flex justify-end gap-3">
              <button onClick={() => setShowPostModal(false)} className="px-4 py-2 border rounded-md text-gray-700">Cancel</button>
              <button onClick={savePost} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save</button>
            </div>
          </div>
        </div>
      )}

      {showMediaModal && (
        <div className="fixed inset-0 z-[100000] bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-lg shadow-xl">
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Add Media</h3>
              <button onClick={() => setShowMediaModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div className="p-6 space-y-3">
              <input value={mediaForm.name} onChange={(e) => setMediaForm({ ...mediaForm, name: e.target.value })} placeholder="Name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <input value={mediaForm.url} onChange={(e) => setMediaForm({ ...mediaForm, url: e.target.value })} placeholder="Media URL" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <select value={mediaForm.type} onChange={(e) => setMediaForm({ ...mediaForm, type: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="image">Image</option>
                <option value="video">Video</option>
                <option value="file">File</option>
              </select>
            </div>
            <div className="px-6 py-4 border-t flex justify-end gap-3">
              <button onClick={() => setShowMediaModal(false)} className="px-4 py-2 border rounded-md text-gray-700">Cancel</button>
              <button onClick={addMedia} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

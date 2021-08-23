<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::orderby('id', 'desc')->get()->toArray();
        return $posts;
    }

    public function store(Request $request)
    {
        $post = new Post([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'user_id' => null,
        ]);
        $post->save();

        return response()->json('Post created!');
    }

    public function show($id)
    {
        $post = Post::find($id);
        return response()->json($post);
    }

    public function update($id, Request $request)
    {
        $post = Post::find($id);
        $post->update($request->all());

        return response()->json('Post updated!');
    }

    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();

        return response()->json('Post deleted!');
    }
}

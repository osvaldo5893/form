<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;


class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contactos = Http::withHeaders([
            'Content-Type'=>'application/json',
            'Api-Token'=>'5ec9dfab9961a7dee8e70548af061985d0f552e5087fdf2ede03d456dfc0ca633e97216d',
        ])->get('https://clico.api-us1.com/api/3/contacts?email=prueba@prueba.com');
        $contactos2 = $contactos->json();

        return Inertia::render('Contactos/Form',['contactos'=>$contactos2]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->only(['firstName','lastName','email','phone','email_domain','orgname','orgid'])
        $nombre = $request->only(['firstName'])['firstName'];
        $lastName = $request->only(['lastName'])['lastName'];
        $email = $request->only(['email'])['email'];
        $phone = $request->only(['phone'])['phone'];
        $orgname = $request->only(['orgname'])['orgname'];
        $redS = $request->only(['redS'])['redS'];
        $web = $request->only(['web'])['web'];
        // dd($web);
        $array = array(
            'contact'=>array(
                'email'=>$email,
                'firstName'=>$nombre,
                'lastName'=>$lastName,
                'phone'=>$phone,
                'fieldValues'=>[
                    array(
                        'field'=>10,
                        'value'=>$orgname
                    ),
                    array(
                        'field'=>11,
                        'value'=>$redS
                    ),
                    array(
                        'field'=>1,
                        'value'=>$web
                    ),
                ],
            ),
        );

        $guardar = Http::withHeaders([
            'Content-Type'=>'application/json',
            'Api-Token'=>'5ec9dfab9961a7dee8e70548af061985d0f552e5087fdf2ede03d456dfc0ca633e97216d',
        ])->post('https://clico.api-us1.com/api/3/contacts',$array);
        // dd();
        $id = $guardar->json()['contact']['id'];
        
        $this->AsignarLista($id);
        $this->AsignarEtiqueta($id);



        return Redirect::route('contactos.index');
    }

    public function AsignarLista($id){
        $list = array(
            'contactList' => array(
                'list' => '2',
                'contact' => $id,
                'status' => '1'
            )
        );
        $lista = Http::withHeaders([
            'Content-Type'=>'application/json',
            'Api-Token'=>'5ec9dfab9961a7dee8e70548af061985d0f552e5087fdf2ede03d456dfc0ca633e97216d',
        ])->post('https://clico.api-us1.com/api/3/contactLists',$list);


    }
    public function AsignarEtiqueta($id){
        $tag = array(
            'contactTag' => array(
                'contact' => $id,
                'tag' => '9'
            )
        );
        $etiqueta = Http::withHeaders([
            'Content-Type'=>'application/json',
            'Api-Token'=>'5ec9dfab9961a7dee8e70548af061985d0f552e5087fdf2ede03d456dfc0ca633e97216d',
        ])->post('https://clico.api-us1.com/api/3/contactTags',$tag);


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        //
    }
}

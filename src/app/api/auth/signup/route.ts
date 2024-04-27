import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, password, age, gender } = reqBody;
    console.log(reqBody);

    // //check if user exists
    // const user = await User.findOne({email})
    // if(!user){
    //     return NextResponse.json({error: "User does not exist"}, {status: 400})
    // }
    // console.log("user exists");

    // //check if password is correct
    // const validPassword = await bcryptjs.compare(password, user.password)
    // if(!validPassword){
    //     return NextResponse.json({error: "Invalid password"}, {status: 400})
    // }
    // console.log(user);

    // //create token data
    // const tokenData = {
    //     id: user._id,
    //     username: user.username,
    //     email: user.email
    // }
    // //create token
    // const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

    const response = NextResponse.json({
      message: "SignUp successful",
    });
    // response.cookies.set("token", token, {
    //     httpOnly: true,

    // })
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
